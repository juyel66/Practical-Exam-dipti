import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'; // ES6
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


const StudentHouseCard = ({item}) => {
    // console.log(item)
    const { image,estate_title,description,segment_name,id3} = item;
    return (
        <div data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">

            <Helmet><title>Student Houses</title></Helmet>
                        <div className="card h-[500px] w-full  hover:border-3 hover:bg-gray-200 hover:border-green-500 bg-base-100 border-2 border-gray-500 shadow-xl">
                <figure><img className="h-72   w-[400px] pt-10 rounded-lg " src={image} alt="Shoes" /></figure>
                <div className="card-body">

                    <h2 className=" card-title font-bold">{estate_title}</h2>
                    <p>{description.slice(0,100) }</p>

                    <p className="font-bold">{segment_name}</p>
                    <div className="card-actions">
                        <Link to={`/studentViewProperty/${id3}`} className="w-full" ><button className="btn w-full bg-green-500 text-white text-xl hover:text-black">View Property</button></Link>
                    </div>
                </div>
            </div>
        
            
        </div>
    );
};

export default StudentHouseCard;

StudentHouseCard.propTypes={
    item: PropTypes.node.isRequired
}