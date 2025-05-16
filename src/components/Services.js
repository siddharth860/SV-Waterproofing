import React from 'react';
import img from '../images/roof.png'; 
import img2 from '../images/base.png';
import img3 from '../images/coolroof.png';
import img4 from '../images/terrace.png';

const Services = () => {

    return (
        <div id="services" className="bg-gray-100 py-12" >
            <section>
                    <div className="my-4 py-4">
                        <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">services</h2>
                        
                        <div className='flex justify-center'>
                            <div className='w-24 border-b-4 border-blue-900'></div>
                        </div>
                        <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">We are deeply committed to solve the problems of our clients.</h2>
                    </div>

                    <div className="px-12" >
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            
                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className=" group-hover:scale-[1.15] transition duration-1000 ease-in-out" style={{borderRadius:'12px'}} src={img} />
                                    <h2 className="font-semibold my-4 text-2xl text-center">Roof Waterproofing</h2>
                                    <p className="text-md font-medium">
                                    Protect your roof from cracks, leaks, and water damage with our durable waterproofing solutions. Ideal for both flat and sloped roofs, our treatments ensure long-term protection against harsh weather.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="group-hover:scale-[1.15] transition duration-1000 ease-in-out"  style={{borderRadius:'12px'}}  src={img2} />
                                    <h2 className="font-semibold my-4 text-2xl text-center"> Basement Leak Repair</h2>
                                    <p className="text-md font-medium">
                                    Say goodbye to damp basements. We identify and seal all sources of water intrusion, using advanced materials to keep your foundation dry, strong, and mold-free.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                    <img alt="card img" className=" group-hover:scale-[1.15] transition duration-1000 ease-in-out"  style={{borderRadius:'12px'}} src={img3} />
                                    <h2 className="font-semibold my-4 text-2xl text-center "> Cool Coating</h2>
                                    <p className="text-md font-medium">
                                    Reduce surface temperature and improve energy efficiency with our heat-reflective cool coatings. Perfect for rooftops and terraces exposed to the sun.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="group-hover:scale-[1.15] transition duration-1000 ease-in-out"  style={{borderRadius:'12px'}} src={img4} />
                                    <h2 className="font-semibold my-4 text-2xl text-center "> Terrace Coating Solutions</h2>
                                    <p className="text-md font-medium">
                                    Our terrace waterproofing ensures complete sealing of joints and cracks, protecting your space from water damage while extending the life of your terrace.
                                    </p>
                                </div>
                            </div>                    
                        </div>
                    </div>
            </section>

            <section>
  <div className="bg-white py-12">
    <div className="m-auto max-w-6xl px-4 md:px-12">
      <h3 className="mb-12 text-center md:text-5xl text-3xl font-bold text-blue-900">
        Testimonial
      </h3>
      <div className="space-y-12">
        {/* First Testimonial */}
        <div className="text-center">
          <h3 className="text-3xl text-blue-900 font-bold">
            - <span className="font-black">S. Karthik, Coimbatore</span>
          </h3>
          <p className="my-3 text-xl text-gray-600 font-semibold">
            “After every rainy season, our terrace would leak into the living room. But after getting waterproofing done by SV Waterproofing, it's completely sealed! The team was professional, punctual, and explained everything clearly.”
          </p>
        </div>

        {/* Second Testimonial */}
        <div className="text-center">
          <h3 className="text-3xl text-blue-900 font-bold">
            - <span className="font-black">Mrs. Revathi, Salem</span>
          </h3>
          <p className="my-3 text-xl text-gray-600 font-semibold">
            “We had serious damp issues in our basement for years. These folks came, inspected thoroughly, and fixed the problem in just a couple of days. Haven’t seen a drop of water since. Highly recommend their services!”
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
        </div>
    )
}

export default Services;