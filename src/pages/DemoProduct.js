import React, { useState } from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import {useDocTitle} from '../components/CustomHook';
import axios from 'axios';
// import emailjs from 'emailjs-com';
import Notiflix from 'notiflix';

const DemoProduct = (props) => {

    useDocTitle('SV waterproofing')

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')
     const [address, setAddress] = useState('');
    const [demoProducts, setDemoProducts ] = useState([])
    const [errors, setErrors] = useState([])


    const handleChange = (e) => {
        const value = e.target.value
        const checked = e.target.checked
        errors.products = []
        if(checked) {
            setDemoProducts([
                ...demoProducts, value
            ])
        } else {
            setDemoProducts(demoProducts.filter( (e) => (e !== value )))
        }
       
    }
    const clearErrors = () => {
        setErrors([])
    }

    const clearInput = () => {
        setFirstName('')
        setLastName('')
        setEmail('')
        setPhone('')
        setMessage('')
        setAddress('');
    }
    
    function sendEmail(e) {
        e.preventDefault();
        document.getElementById('submitBtn').disabled = true;
        document.getElementById('submitBtn').innerHTML = 'Loading...';
    
        // Prepare the data to send to the backend
        const fData = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            message: message,
            phone: phone,
            address: address,
            service: demoProducts,
        };
    
        // Send the data to the backend
        axios({
            method: "post",
            url: "http://52.172.220.149:5000/send-email", // Backend endpoint
            data: fData,
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(function (response) {
                document.getElementById('submitBtn').disabled = false;
                document.getElementById('submitBtn').innerHTML = 'Send Message';
                clearInput(); // Clear the form inputs
                Notiflix.Report.success(
                    'Success',
                    response.data, // Backend success message
                    'Okay',
                );
            })
            .catch(function (error) {
                document.getElementById('submitBtn').disabled = false;
                document.getElementById('submitBtn').innerHTML = 'Send Message';
                const { response } = error;
                if (response && response.status === 500) {
                    Notiflix.Report.failure(
                        'An error occurred',
                        response.data, // Backend error message
                        'Okay',
                    );
                } else {
                    Notiflix.Report.failure(
                        'An error occurred',
                        'Please try again later.',
                        'Okay',
                    );
                }
            });
    }
    return (
        <>
            <div>
                <NavBar />
            </div>
            <div id='demo' className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24">
                <div className="container mx-auto my-8 px-4 lg:px-20" data-aos="zoom-in">
                    <form onSubmit={sendEmail} id="demoProductForm">
                        <div className="w-full bg-white p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
                            <div className="flex">
                                <h1 className="font-bold text-center lg:text-left text-blue-900 uppercase text-4xl">Book a free Visit</h1>
                            </div>
                            <div className="flex items-center my-4">
                                <input 
                                    id="checkbox-1" 
                                    aria-describedby="checkbox-1" 
                                    type="checkbox" 
                                    className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded" 
                                    value="Roof_Waterproofing" onChange={handleChange}
                                 />
                                <label htmlFor="checkbox-1" className="ml-3 text-lg font-medium text-gray-900">Roof Waterproofing</label>
                            </div>
                            <div className="flex items-center my-4">
                                <input 
                                    id="checkbox-1" 
                                    aria-describedby="checkbox-1" 
                                    type="checkbox" 
                                    className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
                                    value="Base_leak_repair" onChange={handleChange}
                                    />
                                <label htmlFor="checkbox-1" className="ml-3 text-lg font-medium text-gray-900">Base leak repair</label>
                            </div>
                            <div className="flex items-center my-4">
                                <input 
                                    id="checkbox-1" 
                                    aria-describedby="checkbox-1" 
                                    type="checkbox" 
                                    className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded" 
                                    value="Cool_roof_waterproofing" onChange={handleChange}
                                />
                                <label htmlFor="checkbox-1" className="ml-3 text-lg font-medium text-gray-900">Cool Roof Waterproofing</label>
                            </div>
                            <div className="flex items-center my-4">
                                <input 
                                    id="checkbox-1" 
                                    aria-describedby="checkbox-1" 
                                    type="checkbox" 
                                    className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
                                    value="Terrace_waterproofing" onChange={handleChange}
                                />
                                <label htmlFor="checkbox-1" className="ml-3 text-lg font-medium text-gray-900">Terrace Waterproofing</label>
                            </div>
                            {errors && 
                                <p className="text-red-500 text-sm">{errors.products}</p>
                            }
                           <div className="my-4">
                                <textarea
                                    name="address"
                                    placeholder="Your Address*"
                                    className="w-full h-24 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    onKeyUp={clearErrors}
                                ></textarea>
                                {errors && <p className="text-red-500 text-sm">{errors.address}</p>}
                            </div>
                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                                <div>
                                    <input 
                                        name="first_name" 
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="text" 
                                        placeholder="First Name*" 
                                        value={firstName}
                                        onChange={(e)=> setFirstName(e.target.value)}
                                        onKeyUp={clearErrors}
                                    />
                                    {errors && 
                                        <p className="text-red-500 text-sm">{errors.first_name}</p>
                                    }
                                </div>
                                
                                <div>
                                    <input 
                                        name="last_name" 
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="text" 
                                        placeholder="Last Name*"
                                        value={lastName}
                                        onChange={(e)=> setLastName(e.target.value)}
                                        onKeyUp={clearErrors}
                                    />
                                    {errors && 
                                        <p className="text-red-500 text-sm">{errors.last_name}</p>
                                    }
                                </div>

                                <div>
                                    <input 
                                        name="email"
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="email" 
                                        placeholder="Email*"
                                        value={email}
                                        onChange={(e)=> setEmail(e.target.value)}
                                        onKeyUp={clearErrors}   
                                    />
                                    {errors && 
                                        <p className="text-red-500 text-sm">{errors.email}</p>
                                    }
                                </div>

                                <div>
                                    <input
                                        name="phone_number" 
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="number" 
                                        placeholder="Phone*"
                                        value={phone}
                                        onChange={(e)=> setPhone(e.target.value)}
                                        onKeyUp={clearErrors}
                                    />
                                    {errors && 
                                        <p className="text-red-500 text-sm">{errors.phone_number}</p>
                                    }
                                </div>
                        </div>
                        <div className="my-4">
                            <textarea 
                                name="message" 
                                placeholder="Your Problem in detail*" 
                                className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                value={message}
                                onChange={(e)=> setMessage(e.target.value)}
                                onKeyUp={clearErrors}
                            ></textarea>
                            {errors && 
                                <p className="text-red-500 text-sm">{errors.message}</p>
                            }
                        </div>
                        <div className="my-2 w-1/2 lg:w-2/4">
                            <button type="submit" id="submitBtn" className="uppercase text-sm font-bold tracking-wide bg-gray-500 hover:bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                                    focus:outline-none focus:shadow-outline">
                                submit
                            </button>
                        </div>
                    </div>
                    </form>
                    <div className="w-full  lg:-mt-96 lg:w-2/6 px-8 py-6 ml-auto bg-blue-900 rounded-2xl">
                        <div className="flex flex-col text-white">     
                            <div className="flex my-4 w-2/3 lg:w-3/4">
                                <div className="flex flex-col">
                                    <i className="fas fa-map-marker-alt pt-2 pr-2" />
                                </div>
                                <div className="flex flex-col">
                                    <h2 className="text-2xl">Office Address</h2>
                                    <p className="text-gray-400">Gandhi road,karur, Tamil Nadu</p>
                                </div>
                            </div>
                            
                            <div className="flex my-4 w-2/3 lg:w-1/2">
                                <div className="flex flex-col">
                                <i className="fas fa-phone-alt pt-2 pr-2" />
                                </div>

                                <div className="flex flex-col">
                                    <h2 className="text-2xl">Call Us</h2>
                                    <p className="text-gray-400">Tel: 08055384406</p>
                                
                                    <div className='mt-5'>
                                        <h2 className="text-2xl">Send an E-mail</h2>
                                        <p className="text-gray-400">SVwaterproofing@gmail.com</p>
                                    </div>
                            
                                </div>
                            </div>
                            
                            
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>


    )
}

export default DemoProduct;
