const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();
const corsOptions = {
  origin: "*", // Replace with your frontend URL in production
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: ["Content-Type", "Authorization"]
};

app.use(cors(corsOptions));

app.use(bodyParser.json());


mongoose.connect("mongodb+srv://siddharthprogrammer12:Nzf4VvdnqUhBnxep@sv-cluster.eh4rh3f.mongodb.net/?retryWrites=true&w=majority&appName=SV-cluster", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.error("Error connecting to MongoDB:", error));

const requestSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    address: String,
    message: String,
    phone: String,
    service: [String],
    created_at: { type: Date, default: Date.now },
    visited: { type: Boolean, default: false }
});

const Request = mongoose.model("Request", requestSchema);

const adminSchema = new mongoose.Schema({
    username: String,
    password: String,
});
const Admin = mongoose.model("Admin", adminSchema);

const JWT_SECRET = "yourSuperSecretKey"; 

app.post("/login", async (req, res) => {
    const { username, password } = req.body;

    try {
        const admin = await Admin.findOne({ username });
        if (!admin) return res.status(401).json({ message: "Invalid credentials" });

        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

        const token = jwt.sign({ id: admin._id }, JWT_SECRET, { expiresIn: "1d" });
        res.json({ token });
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
});

function authMiddleware(req, res, next) {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "No token provided" });

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.adminId = decoded.id;
        next();
    } catch {
        res.status(403).json({ message: "Invalid token" });
    }
}

app.post("/send-email", async (req, res) => {
    const { first_name, last_name, email,address, phone, message, service } = req.body;

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: "siddharthprogrammer12@gmail.com",
            pass: "ohnz xnwe fcyn jmhu",
        },
    });

    const mailOptions = {
        from: "siddharthprogrammer12@gmail.com",
        to: "siddharthsadasivam8@gmail.com",
        subject: `Visit request for ${service} from ${first_name} ${last_name}`,
        text: message,
    };

    const mailOptions2 = {
        from: "siddharthprogrammer12@gmail.com",
        to: email,
        subject: "Book confirmation",
        text: `Thank you for your business ${first_name}. We will contact you in 3 to 5 business days`,
    };

    try {
        await transporter.sendMail(mailOptions);
        await transporter.sendMail(mailOptions2);

        const newRequest = new Request({
            first_name,
            last_name,
            email,
            address,
            phone,
            message,
            service,
        });

        await newRequest.save();

        res.status(200).send("Email sent and data stored successfully!");
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Failed to send email or store data.");
    }
});

app.get("/api/book-visits", authMiddleware, async (req, res) => {
    try {
        const visits = await Request.find().sort({ created_at: -1 });
        res.json(visits);
    } catch (error) {
        res.status(500).send("Failed to fetch visit requests.");
    }
});

app.delete("/api/book-visits/:id", authMiddleware, async (req, res) => {
    try {
        await Request.findByIdAndDelete(req.params.id);
        res.status(200).send("Visit deleted.");
    } catch (error) {
        res.status(500).send("Failed to delete visit.");
    }
});

app.patch("/api/book-visits/:id", authMiddleware, async (req, res) => {
    try {
        const { visited } = req.body;
        const updatedVisit = await Request.findByIdAndUpdate(
            req.params.id,
            { visited },
            { new: true }
        );
        res.json(updatedVisit);
    } catch (error) {
        res.status(500).send("Failed to update visited status.");
    }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
