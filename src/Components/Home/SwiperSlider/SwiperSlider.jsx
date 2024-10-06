import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, EffectFade, Autoplay } from 'swiper/modules';


// Import Swiper styles
import 'swiper/swiper-bundle.css';

const SwiperSlider = () => {
    return (
        <div>
            <Swiper
                modules={[Navigation, Pagination, A11y, EffectFade, Autoplay]}
                effect="fade"
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
            >
                <SwiperSlide >
                   


                    <div className="hero h-[60vh]" style={{ backgroundImage: 'url(https://i.ibb.co/VvvtBtn/imresizer-1712555314637.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="">
                                <h1 className="mb-5 lg:text-5xl text-2xl font-bold">Tranquil Haven: Your Single-Family Retreat</h1>
                                <p className="mb-5 text-xl lg:w-[700px] mx-auto">Nestled in a serene neighborhood, this single-family house offers the perfect sanctuary from the hustle and bustle of city life. With spacious rooms, a lush backyard, and modern amenities, it the ideal haven for you and your family to unwind and create lasting memories together.</p>
                               
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>

                    <div className="hero h-[60vh]" style={{ backgroundImage: 'url(https://i.ibb.co/db9zyZH/imresizer-1712555354408.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="">
                                <h1 className="mb-5 lg:text-5xl font-bold"> Modern Living in a Historic Setting</h1>
                                <p className="mb-5 text-xl lg:w-[700px] mx-auto">  Experience the best of both worlds with our townhouses, where contemporary design meets the charm of a historic neighborhood. Enjoy the convenience of urban living combined with the comfort and privacy of your own space.</p>
                               
                            </div>
                        </div>
                    </div>


                </SwiperSlide>

                <SwiperSlide> 
                
                
                <div className="hero h-[60vh]" style={{ backgroundImage: 'url(https://i.ibb.co/MVMG95v/imresizer-1712555379197.jpg' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="">
                                <h1 className="mb-5 lg:text-5xl font-bold">Skyline Serenity  Your Urban Oasis</h1>
                                <p className="mb-5 text-xl lg:w-[700px] mx-auto">Welcome to our luxurious apartments, where city living meets comfort and convenience. Enjoy stunning views of the skyline from your spacious balcony, relax in our resort-style amenities, and experience the vibrant energy of downtown living.</p>
                             
                            </div>
                        </div>
                    </div>
                
                </SwiperSlide>

                <SwiperSlide> 
                <div className="hero h-[60vh]" style={{ backgroundImage: 'url(https://i.ibb.co/r2fB8cr/8eef83f8-1eee-45b9-9755-4e1762ffb914-jpeg-1200-800.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="">
                                <h1 className="mb-5 lg:text-5xl font-bold">Campus Comfort Student Housing Redefined</h1>
                                <p className="mb-5 text-xl lg:w-[700px] mx-auto">Elevate your college experience with our student housing community designed for modern living. Located just steps away from campus, our fully furnished apartments offer convenience, comfort, and a supportive environment for academic success. Enjoy amenities such as study lounges</p>
                                
                            </div>
                        </div>
                    </div>
                
                </SwiperSlide>

                <SwiperSlide> 
                

                <div className="hero h-[60vh]" style={{ backgroundImage: 'url(https://i.ibb.co/1rtnb5L/ac9228d8-ff87-4bf9-8aa7-aafe8907a8d0.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="">
                                <h1 className="mb-5 lg:text-4xl font-bold">Golden Years Haven: Senior Living at Its Finest</h1>
                                <p className="mb-5 text-xl lg:w-[700px] mx-auto"> Discover a fulfilling lifestyle tailored to your needs at our senior living community. From independent living to personalized care options, we provide a supportive environment where you can thrive and enjoy your golden years to the fullest.</p>
                          
                            </div>
                        </div>
                    </div>
                
                </SwiperSlide>

                <SwiperSlide> 


                <div className="hero h-[60vh]" style={{ backgroundImage: 'url(https://i.ibb.co/5FfRk29/imresizer-1712555600658.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="">
                                <h1 className="mb-5 text-5xl font-bold">Seaside Escape Your Perfect Vacation Retreat</h1>
                                <p className="mb-5 text-xl lg:w-[700px] mx-auto"> Immerse yourself in relaxation and rejuvenation at our exquisite vacation destination. Located just steps from the sandy shores and sparkling waters, our resort offers luxurious accommodations, world-class amenities, and breathtaking views. </p>
                                
                            </div>
                        </div>
                    </div>
                
                
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default SwiperSlider;