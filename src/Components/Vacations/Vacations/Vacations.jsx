import { useEffect, useState } from "react";
import VacationsCard from "../Vacationscard/VacationsCard";
import { Helmet } from "react-helmet-async";
// import { useLoaderData, useParams } from "react-router-dom";


const Vacations = () => {
    // const vacationsRentals = useLoaderData();
    // const {id5} = useParams();
    // console.log(vacationsRentals, id5)
    const [vacation , setVacation] = useState([])
    useEffect(()=>{
        fetch("Vacations.json")
        .then(res=> res.json())
        .then(data=> setVacation(data))
    },[])
    // console.log(vacation);

    return (
        <div>
            <Helmet><title>Vacation Houses</title></Helmet>
           <h1 className="text-3xl mt-7 mb-5 font-bold text-center fond-bold">Vacations Rentals</h1>
           <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
            {vacation.map(item => <VacationsCard key={item.id5} item={item}></VacationsCard> )}
           </div>


            
        </div>
    );
};

export default Vacations;