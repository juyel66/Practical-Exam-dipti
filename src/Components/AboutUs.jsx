// src/AboutUs.js

import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
 <div>
     <p data-aos="zoom-in" data-aos-duration="1500" className=''>About Us</p>

<p data-aos="zoom-in" data-aos-duration="1500" className="text-base lg:text-3xl font-bold   md:w-[700px] mx-auto text-center mt-3 uppercase bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient ">WelCome to our JR Residential company</p>
         <div className=" lg:flex justify-between mt-10">
     <div className="item-center flex justify-center">

         <div>

             <p className="text-3xl mb-5 font-bold">MD JUYEL RANA is the main founder of this <Link to="/" className="text-blue-500 underline">JR Residential</Link> company</p>
             <div className="join join-vertical w-full">
                 <div  className="collapse collapse-arrow join-item border border-base-300">
                     <input type="radio" name="my-accordion-4" defaultChecked />
                     <div className="collapse-title text-xl font-medium">
                     Charming Family Haven in Serene Neighborhood
                     </div>
                     <div className="collapse-content">
                         <p>Discover your dream home in this charming residential haven nestled in a serene neighborhood. This cozy abode boasts.</p>
                     </div>
                 </div>
                 <div className="collapse collapse-arrow join-item border border-base-300">
                     <input type="radio" name="my-accordion-4" />
                     <div className="collapse-title text-xl font-medium">
                     Tranquil Retreat


                     </div>
                     <div className="collapse-content">
                         <p> Serene 3-bed, 2-bath haven with modern amenities, open layout, and a peaceful backyard sanctuary. Ideal for relaxation and rejuvenation.</p>
                     </div>
                 </div>
                 <div className="collapse collapse-arrow join-item border border-base-300">
                     <input type="radio" name="my-accordion-4" />
                     <div className="collapse-title text-xl font-medium">
                     Modern Apartment with Stunning Views and Amenities
                     </div>
                     <div className="collapse-content">
                         <p>Stylish 2-bed apartment with panoramic city views, modern amenities, and vibrant neighborhood ambiance. Perfect blend of comfort and convenience.</p>
                     </div>
                 </div>
                 <div className="collapse collapse-arrow join-item border border-base-300">
                     <input type="radio" name="my-accordion-4" />
                     <div className="collapse-title text-xl font-medium">
                     Whispering Pines Retreat
                     </div>
                     <div className="collapse-content">
                         <p>Tranquil 3-bed retreat with spacious living, lush garden, and modern comforts. Perfect for peaceful family living</p>
                     </div>
                 </div>
                 <div className="collapse collapse-arrow join-item border border-base-300">
                     <input type="radio" name="my-accordion-4" />
                     <div className="collapse-title text-xl font-medium">
                     Sunset Terrace Apartments
                     </div>
                     <div className="collapse-content">
                         <p>Sunset Terrace Apartments offer modern living with stunning views, spacious layouts, and convenient amenities, providing the perfect urban retreat</p>
                     </div>
                 </div>
                 <div className="collapse collapse-arrow join-item border border-base-300">
                     <input type="radio" name="my-accordion-4" />
                     <div className="collapse-title text-xl font-medium">
                     Tranquil Oasis Apartments
                     </div>
                     <div className="collapse-content">
                         <p>Discover modern comfort in our tranquil oasis apartments featuring spacious layouts, serene surroundings, and convenient amenities for urban living.</p>
                     </div>
                 </div>
                 <div className="collapse collapse-arrow join-item border border-base-300">
                     <input type="radio" name="my-accordion-4" />
                     <div className="collapse-title text-xl font-medium">
                     Harbor View Apartments
                     </div>
                     <div className="collapse-content">
                         <p>Experience luxury living with breathtaking harbor views, upscale amenities, and convenient access to downtown entertainment and dining. Welcome.</p>
                     </div>
                 </div>
                 <div className="collapse collapse-arrow join-item border border-base-300">
                     <input type="radio" name="my-accordion-4" />
                     <div className="collapse-title text-xl font-medium">
                     Skyline Haven Apartments
                     </div>
                     <div className="collapse-content">
                         <p>Elevate your lifestyle at Skyline Haven, where modern design, panoramic views, and urban convenience meet for the perfect city retreat.</p>
                     </div>
                 </div>
                 <div className="collapse collapse-arrow join-item border border-base-300">
                     <input type="radio" name="my-accordion-4" />
                     <div className="collapse-title text-xl font-medium">
                     Cityscape Retreat Apartments
                     </div>
                     <div className="collapse-content">
                         <p>Indulge in city living at its finest with panoramic skyline views, contemporary design, and luxury amenities for the ultimate urban escape.</p>
                     </div>
                 </div>
                 <div className="collapse collapse-arrow join-item border border-base-300">
                     <input type="radio" name="my-accordion-4" />
                     <div className="collapse-title text-xl font-medium">
                     Metropolitan Heights Apartments
                     </div>
                     <div className="collapse-content">
                         <p>Experience urban sophistication at Metropolitan Heights, offering sleek design, upscale amenities, and unparalleled city views for the discerning resident</p>
                     </div>
                 </div>
             </div>
         </div>



     </div>
     <div>

          
         <div data-aos="fade-down" className="card card-compact border-2 border-gray-400 bg-base-100 shadow-xl">
             <figure><img className="lg:h-[525px] lg:w-[420px] obj rounded-full" src="https://i.ibb.co/7VSBYtS/imresizer-1713070675831.jpg" alt="Shoes" /></figure>
             <div className="card-body">
                 <h2 className="card-title font-bold">MD JUYEL RANA</h2>
                 <p className="font-bold text-[16px] break-all">Email:<span className="font-bold">mdjuyelrana.com.bd1@gmail.com</span></p>
                 <p>Founder at JR Residential</p>
                 <div className="card-actions justify-center">
                    <Link  to="https://www.facebook.com/juyel99730" className="w-full"> <button className="btn bg-green-500 w-full text-white text-xl">Contact Us</button></Link>
                 </div>
             </div>
         </div>

     </div>

 </div>
 </div>
  );
};

export default AboutUs;
