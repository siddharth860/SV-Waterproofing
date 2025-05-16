const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/waterproofing", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.error("Error connecting to MongoDB:", error));

const adminSchema = new mongoose.Schema({
    username: String,
    password: String,
});

const Admin = mongoose.model("Admin", adminSchema);

async function addAdmin() {
    const username = "admin"; // Replace with your desired username
    const password = "pass123"; // Replace with your desired password

    const hashedPassword = await bcrypt.hash(password, 10);

    const newAdmin = new Admin({
        username,
        password: hashedPassword,
    });

    await newAdmin.save();
    console.log("Admin user added successfully!");
    mongoose.connection.close();
}

addAdmin();