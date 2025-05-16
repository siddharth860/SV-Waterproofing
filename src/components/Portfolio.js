import img1 from '../images/zycoprime.jpg';
import img2 from '../images/zycosil.jpg';
import img3 from '../images/asian.JPG'; 
import img4 from '../images/fosroc.jpg';
const Portfolio = () => {
    return (
        <>
            <div className="my-4 py-4" id='portfolio'>
                <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Products</h2>
                <div className='flex justify-center'>
                    <div className='w-24 border-b-4 border-blue-900 mb-8'></div>
                </div>

                <div className="px-4" data-aos="fade-down" data-aos-delay="600">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">                            
                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max">
                            <div className="m-2 text-justify text-sm">
                                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">Zycoprime</h4>
                                <p className="text-md font-medium leading-5 h-auto md:h-48">
                                  Zycoprime is a high-performance primer designed to enhance the adhesion of waterproofing membranes and coatings. It provides a strong bond between the substrate and the applied material, ensuring long-lasting protection against water ingress. Ideal for use on various surfaces, including concrete, masonry, and metal, Zycoprime is essential for achieving optimal waterproofing results. 
                                </p>
                                <div className="flex justify-center my-4">
                                    <img 
                                        alt="card img" 
                                        className="w-48 h-48 object-cover rounded-lg" 
                                        src={img1} 
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                            <div className="m-2 text-justify text-sm">
                                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">Zycosil Plus</h4>
                                <p className="text-md font-medium leading-5 h-auto md:h-48">
                                    Zycosil Plus is a premium waterproofing solution that offers superior protection against water penetration and moisture damage. Its advanced formulation creates a durable barrier on various surfaces, including concrete, masonry, and wood. Ideal for both interior and exterior applications, Zycosil Plus ensures long-lasting performance and enhances the longevity of structures by preventing leaks and dampness.
                                </p>
                                <div className="flex justify-center my-4">
                                    <img 
                                        alt="card img" 
                                        className="w-48 h-48 object-cover rounded-lg" 
                                        src={img2} 
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                            <div className="m-2 text-justify text-sm">
                                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">Asianpaint Damp Proof</h4>
                                <p className="text-md font-medium leading-5 h-auto md:h-48">
                                    Asian Paints Damp Proof is a high-performance, fiber-reinforced waterproof coating specially designed to protect exterior walls from heavy rainfall, moisture seepage, and dampness. Whether you're dealing with hairline cracks or prolonged exposure to monsoon rains, Damp Proof ensures your walls stay strong, dry, and beautiful for years.
                                </p>
                                <div className="flex justify-center my-4">
                                    <img 
                                        alt="card img" 
                                        className="w-48 h-48 object-cover rounded-lg" 
                                        src={img3} 
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                            <div className="m-2 text-justify text-sm">
                                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">Fosroc Brushbond</h4>
                                <p className="text-md font-medium leading-5 h-auto md:h-48">
                                 Fosroc Brushbond Roof Guard is a high-performance, elastomeric, acrylic-based waterproofing system designed specifically for roof slabs and terraces. It forms a tough, seamless, and flexible waterproof layer that provides excellent protection against water penetration, UV degradation, and weathering effects.
                                </p>
                                <div className="flex justify-center my-4">
                                    <img 
                                        alt="card img" 
                                        className="w-48 h-48 object-cover rounded-lg" 
                                        src={img4} 
                                    />
                                </div>
                            </div>
                        </div>                    
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio;