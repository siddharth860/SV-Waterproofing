import React from 'react';
import img from '../images/aboutimg.png';
import { Link } from 'react-router-dom';

const Intro = () => {
    return (
        <>
                <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6" id='about' >

                    <div className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left">
                        <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                            <img alt="card img" className="float-right" style={{borderRadius:'12px'}} src={img} />
                        </div>
                        <div className="flex-col my-4 text-center lg:text-left lg:my-0 lg:justify-end w-full lg:w-1/2 px-8" >
                            
                           
                            <div>
                            <h3 className="mb-5 md:text-5xl text-3xl font-bold text-blue-900">
                            {}
                            At SV Waterproofing
                            </h3>
                                <p className='my-3 text-xl text-gray-600 font-semibold'>  We specialize in providing reliable and long-lasting waterproofing solutions for homes and commercial spaces. With years of hands-on experience and a skilled team of experts, we take pride in protecting your property from the damaging effects of water seepage, leaks, and dampness.</p>
                            </div>
                            
                            <div>
                                <p className='my-3 text-xl text-gray-600 font-semibold'>We believe in quality work, transparency, and customer satisfaction. That’s why we only use the best-in-class materials and advanced techniques to ensure your space stays dry and safe—season after season.</p>
                            </div>
                          
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Intro;