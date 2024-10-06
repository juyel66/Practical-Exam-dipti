import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import TownCard from "../townCard/TownCard";
import { Helmet } from "react-helmet-async";


const TownHouse = () => {
    // const [town, setTown] = useState();
    const towns = useLoaderData();
    console.log(towns);
    
    return (

      <div>
        <Helmet><title>Townhouses</title></Helmet>
          <h1 className="text-3xl text-center font-bold mt-10">
                Townhouses
            </h1>
            
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-10"> 
            {
                towns.map(items => <TownCard key={items.id1} items={items}></TownCard>)
            }
            
        </div>
        
      </div>
    );
};

export default TownHouse;