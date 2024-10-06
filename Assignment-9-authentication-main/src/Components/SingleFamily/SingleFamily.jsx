import { useEffect, useState } from "react";
import SingleFamilyCard from "../SingleFammilyCard/SingleFamilyCard";
import { Helmet } from "react-helmet-async";




const SingleFamily = () => {

    const [single, setSingle] = useState([])
    useEffect(() => {
        fetch("singleFamily.json")
            .then(res => res.json())
            .then(data => setSingle(data))
    }, [])
    // console.log(single)
    return (
        <div>
        

            <h1 className="text-3xl font-bold text-center mt-10">Single Family home</h1>
            <Helmet><title>Single Family home</title></Helmet>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-6">
                {
                    single.map(singleData => <SingleFamilyCard key={singleData.id} singleData={singleData}></SingleFamilyCard>)
                }
            </div>

        </div>
    );
};

export default SingleFamily;