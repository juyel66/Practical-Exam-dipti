import { Helmet } from "react-helmet-async";
import { Link, useLoaderData, useParams } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


const SeniorViewProperty = () => {
    const seniors = useLoaderData();
    const { id4 } = useParams();
    const idInt4 = parseInt(id4);
    const senior = seniors.find(senior => senior.id4 === idInt4)
    // console.log(senior);
    const { image, estate_title, description, price, area, facilities, location, status, segment_name }= senior

    return (
        <div data-aos="zoom-in">
            <Helmet><title>Senior Living Houses Details</title></Helmet>
            <div>
                <h1 className="text-4xl text-center font-bold underline mb-4 text-green-600  ">{estate_title}</h1>

                <div className="card h-full w-full  hover:border-3 hover:bg-gray-200 hover:border-green-500 bg-base-100 border-2 border-gray-500 shadow-xl">
                    <figure><img className="h-[700px]    w-full  pt-10 rounded-lg pl-9 pr-9 object-cover " src={image} alt="Shoes" /></figure>
                    <div className="card-body">

                        <h2 className=" card-title text-4xl underline font-bold">{estate_title}</h2>
                        <p className="text-xl">{description}</p>



                        <p className="font-bold text-xl">{segment_name}</p>
                        <div>
                            <p className="font-bold text-2xl mt-5">Facilities</p>
                            <li>{facilities[0]}</li>
                            <li>{facilities[1]}</li>
                            <li>{facilities[2]}</li>
                        </div> <br />
                        <div className="flex  text-xl gap-40 font-bold">
                            <p>Price: {price}</p>
                            <p>Area: {area}</p>
                        </div>
                        <div className="flex  text-xl font-bold">
                            <p>Location: {location}</p>
                            <p>Status: {status}</p>
                        </div>

                        <div className="card-actions">
                            <Link to="/" className="w-full" ><button className="btn w-full bg-green-500 text-white text-xl hover:text-black">Back to home</button></Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SeniorViewProperty;