// import Cards from "../../Cards/Cards";

import { Helmet } from "react-helmet-async";
import AllCard from "../AllCard/AllCard";
import SwiperSlider from "./SwiperSlider/SwiperSlider";
import { Link } from "react-router-dom";
import { googleMapAPIKey } from "../Map/GoogleMap";
import GoogleMapReact from 'google-map-react';


const AnyReactComponent = ({ text }) => <div className="text-red-600 font-bold">{text}</div>;
const Home = () => {

    const defaultProps = {
        center: {
            lat: 25.8600,
            lng: 88.3585
        },
        zoom: 15
    };

    return (
<div>
            <div>

            <Helmet>
                <title>
                    Home
                </title>
            </Helmet>
            <h1 data-aos="fade-down" data-aos-duration="1000" className="lg:text-4xl text-3xl text-center font-bold font-sans bg-gradient-to-r from-primary via-red-900 to-secondary text-transparent bg-clip-text animate-gradient bg-400%" >WELCOME TO OUR HOUSE RENT COMPANY</h1> <br /><br />
            {/* swiper  */}
            <SwiperSlider></SwiperSlider>





            {/* card section  */}

            <div className="mt-8">
                {/* <Cards></Cards> */}
                <AllCard></AllCard>

            </div>

        
            <p className="text-3xl text-center mt-1 text-blue-600 "></p>


            {/* <div className="lg:flex  mb-16 ">


                <div data-aos="fade-up" className="flex-1">
                    <p className="text-4xl font-bold mb-6">Tranquil Elegance: A Suburban Sanctuary for Modern Living</p>
                    <p className="text-xl">
                        Situated in a tranquil suburban neighborhood, this stunning residence harmoniously blends sophistication with contemporary living. Its charming exterior features a tasteful combination of brick and siding, complemented by manicured landscaping that adds to its curb appeal.

                        Upon entry, your greeted by an inviting foyer leading into an open-concept living space. The living room, adorned with a cozy fireplace and bathed in natural light from large windows, offers an ideal space for relaxation and entertainment. Adjacent, the gourmet kitchen boasts high-end appliances, custom cabinetry, and granite countertops, perfect for culinary enthusiasts.

                        The dining area, with its elegant chandelier and access to the backyard, provides a delightful setting for meals while enjoying the outdoor scenery. Retreat to the master suite, a haven of comfort featuring a spacious bedroom, sitting area, and luxurious ensuite bathroom with a soaking tub and separate shower.

                        Additional bedrooms offer ample space and comfort for family or guests, each designed with attention to detail and natural light. Outside, the backyard oasis beckons with a sprawling patio, sparkling, and lush greenery, creating a serene retreat for relaxation and recreation.
                    </p><br />
                    <ul className="text-xl">
                        <li> <span className="font-bold">Swimming Pool:</span> A sparkling pool for relaxation and recreation during warm summer days.</li>
                        <li> <span className="font-bold">Gourmet Kitchen:</span> Equipped with high-end appliances, custom cabinetry, and granite countertops for culinary enthusiasts.</li>
                        <li> <span className="font-bold">Spacious Patio:</span> A sprawling outdoor patio area perfect for al fresco dining, entertaining guests, or simply enjoying the sunshine.</li>
                        <li> <span className="font-bold">Luxurious Master Suite:</span> A serene retreat featuring a spacious bedroom, cozy sitting area, and a lavish ensuite bathroom with a soaking tub and separate shower.</li>
                    </ul>
                    <button className="btn btn-ghost bg-green-500 w-40 text-white text-xl mt-5">More</button>

                </div>

                <div data-aos="fade-down" className="flex-4/6">
                    <img className="lg:w-[550px] h-[500px] lg:h-[650px] w-[400px]" src="https://i.ibb.co/wyp1MgM/imresizer-1712946354720.jpg" alt="" />


                </div>

                




            </div> */}

            <div>
                <h1 className="text-center mt-20 text-4xl font-bold text-green-600">Meet Our Team</h1>
                <p className="text-center text-green-500 font-bold">Our expert team is made up of creatives with  <br />technical know-how, strategist who think outside the box, and developers who push innovation </p>

            </div>


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



            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mt-9" >

                <div data-aos="fade-up" className="card card-compact border-2 border-green-500  bg-base-100 shadow-xl">
                    <figure><img className="lg:h-[200px] pt-1 lg:w-[220px] rounded-full" src="https://i.ibb.co/Rjx9cyF/images-9.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold">John.smith</h2>
                        <p className="font-bold ">Email: jhon1222@gmail.com</p>
                        <div className="card-actions justify-center">
                            <button className="btn bg-green-500 w-full text-white text-xl ">view Details</button>
                        </div>
                    </div>
                </div>


                <div data-aos="fade-down" className="card card-compact border-2 border-green-500  bg-base-100 shadow-xl">
                    <figure><img className="lg:h-[200px] pt-1 lg:w-[220px] rounded-full" src="https://i.ibb.co/NZV6C5W/download-1.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold">Jsmith</h2>
                        <p className="font-bold">Email: jsmithjhon122@gmail.com</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn bg-green-500 w-full text-white text-xl  ">View Details</button>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-up" className="card card-compact border-2 border-green-500  bg-base-100 shadow-xl">
                    <figure><img className="lg:h-[200px] pt-1 lg:w-[220px] rounded-full" src="https://i.ibb.co/HYx8MXV/download-2.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold">Smith.john!</h2>
                        <p className="font-bold">Email: smithjhon122@gmail.com</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn bg-green-500 w-full text-white text-xl ">View Details</button>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-down" className="card border-2 border-green-500 card-compact  bg-base-100 shadow-xl">
                    <figure><img className="h-[200px] pt-1 w-[220px] rounded-full" src="https://i.ibb.co/5kR0BHf/download-3.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold">Johns</h2>
                        <p className="font-bold">Email: jhon122@gmail.com</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn bg-green-500 w-full text-white text-xl ">View Details</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>

        {/* google map  */} 
    <p className="text-3xl text-green-500 text-center font-bold mt-10">Go to this location if you want to contact us</p>
        <div className="mt-2">
        <div>
            <div style={{ height: '500px', width: '100%' }}>

                <GoogleMapReact
                    bootstrapURLKeys={{ key: googleMapAPIKey }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                >
                    <AnyReactComponent
                        lat={defaultProps.center.lat}
                        lng={defaultProps.center.lng}
                        text="My Home"
                    />
                </GoogleMapReact>
            </div>

        </div>
        </div>
</div>
    );
};

export default Home;