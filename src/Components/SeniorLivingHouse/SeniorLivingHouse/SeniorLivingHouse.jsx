import { useLoaderData } from "react-router-dom";
import SeniorLivingCard from "../SeniorLivingCard/SeniorLivingCard";
import { Helmet } from "react-helmet-async";


const SeniorLivingHouse = () => {   
    const seniorLiving = useLoaderData();
    console.log(seniorLiving);

    return (
        <div>
            <Helmet><title>Senior Living Communities</title></Helmet>
            <h1 className="text-4xl text-center font-bold mt-5">Senior Living Communities</h1>
            <div className="mt-5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                {
                    seniorLiving.map(item => <SeniorLivingCard key={item.id4} item={item}></SeniorLivingCard>)
                }
            </div>
            
        </div>
    );
};

export default SeniorLivingHouse;