import { Link } from "react-router-dom";

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const AllCard = () => {
    return (
        <div>
            <h1 className="text-4xl text-center mb-5 font-bold text-green-500 ">Our Estate</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-3">
                {/* card 1 */}
                <Link  to="/singleFamily">
                    <div data-aos="flip-left"  className="border-2 border-gray-400 rounded-xl hover:border-4 hover:border-green-500 hover:bg-green-100 bg-base-200">
                        <div className="hero-content  flex-col lg:flex-row">
                            <img src="https://i.ibb.co/hspzZsP/imresizer-1712823529226.jpg" className="max-w-sm rounded-lg shadow-2xl  lg:h-[130px] h-full w-full lg:w-[130px] " />
                            <div>
                                <h1 className="text-2xl font-bold ">Single-family homes</h1>
                                <p className="py-6 ">standalone residences offering privacy and space, ideal for families or...</p>
                                {/* <button className="btn btn-primary">Get Started</button> */}
                            </div>
                        </div>
                    </div></Link>
                {/* card 2 */}
                <Link to="/townHouse">
                    <div data-aos="flip-left" className="border-2 border-gray-400 rounded-xl hover:border-4 hover:border-green-500 hover:bg-green-100 bg-base-200">
                        <div className="hero-content flex-col lg:flex-row">
                            <img src="https://i.ibb.co/zZKpf45/imresizer-1712823538807.jpg" className="max-w-sm rounded-lg shadow-2xl lg:h-[130px] h-full w-full lg:w-[130px]" />
                            <div>
                                <h1 className="text-2xl font-bold "> Townhouses</h1>
                                <p className="py-6 ">Attached homes with shared walls, offering a blend of space and community.</p>
                                {/* <button className="btn btn-primary">Get Started</button> */}
                            </div>
                        </div>
                    </div>
                </Link>
                {/* card 3 */}
                <Link to="/apartments">
                    <div data-aos="flip-left" className="border-2 border-gray-400 rounded-xl hover:border-4 hover:border-green-500 hover:bg-green-100 bg-base-200">
                        <div className="hero-content flex-col lg:flex-row">
                            <img src="https://i.ibb.co/cb3NKkR/imresizer-1712823556068.jpg" className="max-w-sm rounded-lg shadow-2xl lg:h-[130px] h-full w-full lg:w-[130px]" />
                            <div>
                                <h1 className="text-2xl font-bold "> Apartments</h1>
                                <p className="py-6 ">Compact living spaces with shared amenities, ideal for urban lifestyles.
                                </p>
                                {/* <button className="btn btn-primary">Get Started</button> */}
                            </div>
                        </div>
                    </div>
                </Link>
                {/* card 4 */}
                <Link to="/studentHouse">
                    <div data-aos="flip-left" className="border-2 border-gray-400 rounded-xl hover:border-4 hover:border-green-500 hover:bg-green-100 bg-base-200">
                        <div className="hero-content flex-col lg:flex-row">
                            <img src="https://i.ibb.co/4MtNzxZ/imresizer-1712823682222.jpg" className="max-w-sm rounded-lg shadow-2xl lg:h-[130px] h-full w-full lg:w-[130px]" />
                            <div>
                                <h1 className="text-2xl font-bold ">Student
                                    housing</h1>
                                <p className="py-6 ">Accommodations tailored for academic life, fostering community and convenience.</p>
                                {/* <button className="btn btn-primary">Get Started</button> */}
                            </div>
                        </div>
                    </div>
                </Link>
                {/* card 5 */}
                <Link to="seniorLivingHouse">
                    <div data-aos="flip-left" className="border-2 border-gray-400 rounded-xl hover:border-4 hover:border-green-500 hover:bg-green-100 bg-base-200">
                        <div className="hero-content flex-col lg:flex-row">
                            <img src="https://i.ibb.co/sJyjNVs/snior.jpg" className="max-w-sm rounded-lg shadow-2xl lg:h-[130px] h-full w-full lg:w-[130px]" />
                            <div>
                                <h1 className="text-2xl font-bold "> Senior living </h1>
                                <p className="py-6 ">Residential spaces designed for comfort and community, catering to older adults.

                                </p>
                                {/* <button className="btn btn-primary">Get Started</button> */}
                            </div>

                            
                        </div>
                    </div>
                </Link>
                {/* card 6 */}
                <Link to="vacationsRentals">
                    <div data-aos="flip-left" className=" border-2 border-gray-400 rounded-xl hover:border-4 hover:border-green-500 hover:bg-green-100 bg-base-200 ">
                        <div className="hero-content flex-col lg:flex-row">
                            <img src="https://i.ibb.co/L0vJj7B/Vacation-rentals.jpg" className="max-w-sm rounded-lg shadow-2xl lg:h-[130px] h-full w-full lg:w-[130px]" />
                            <div>
                                <h1 className="text-2xl font-bold ">Vacation rentals</h1>
                                <p className="py-6 ">Temporary accommodations offering flexibility and comfort for travelers.
                                </p>
                                {/* <button className="btn btn-primary">Get Started</button> */}
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default AllCard;