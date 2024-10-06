import { useLoaderData } from "react-router-dom";
import ApartmentsSingleCard from "../ApartmentsSingleCard/ApartmentsSingleCard";
import { Helmet } from "react-helmet-async";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


const ApartmentsCard = () => {
    const apartments = useLoaderData();
    console.log(apartments)
    return (
        <div data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">

            <h1 className="text-3xl text-center font-bold mb-5">Apartments</h1>
            <Helmet><title>Apartments</title></Helmet>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
            {
                apartments.map(item => <ApartmentsSingleCard key={item.id2} item={item}></ApartmentsSingleCard>)
            }
            
            
        </div>
        </div>
    );
};

export default ApartmentsCard;