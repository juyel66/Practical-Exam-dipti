import { useLoaderData } from "react-router-dom";
import PropertiesCard from "./PropertiesCard";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import AgentsCard from "./AgentsCard";
import { googleMapAPIKey } from "../Map/GoogleMap";
import GoogleMapReact from "google-map-react";
import Marquee from "react-fast-marquee";

const AnyReactComponent = ({ text }) => (
  <div className="text-red-600 font-bold">{text}</div>
);
const Properties = () => {
  const Properties = useLoaderData();
  const [Agents, setAgents] = useState([]);
  useEffect(() => {
    fetch("Agents.json")
      .then((res) => res.json())
      .then((data) => setAgents(data));
  }, []);
  // console.log(Agents)

  const defaultProps = {
    center: {
      lat: 26.0274,
      lng: 88.4646,
    },
    zoom: 20,
  };

  return (
    <div>
      <Helmet>
        <title>Properties</title>
      </Helmet>

      <div>
        <Marquee className="text-5xl w-24 font-bold   flex justify-center items-center bg-white  rounded-xl mb-4 ">
          <div data-aos="fade-down">
            <h1 className="lg:text-3xl text-3xl text-center font-bold font-sans bg-gradient-to-r from-primary via-red-900 to-secondary text-transparent bg-clip-text animate-gradient bg-400%">
                <span data-aos="fade-right">Discover cozy comfort in this charming 100 sq ft residential retreat. Ideal for minimalist living or as a serene guest space, this compact yet functional unit features modern amenities, efficient design, and a touch of rustic charm. Experience the joys of simple living in this thoughtfully crafted tiny home </span>  .
    
            </h1>
          </div>
        </Marquee>
      </div>
      <div className="">
        <div style={{ height: "400px", width: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: googleMapAPIKey }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <AnyReactComponent
              lat={defaultProps.center.lat}
              lng={defaultProps.center.lng}
              text="My Company"
            />
          </GoogleMapReact>
        </div>
      </div>

      <div className="lg:flex mt-10 lg:gap-6">
        <div>
          <h1 className="text-3xl text-center font-bold">for sale</h1>
          {Properties.map((item) => (
            <PropertiesCard item={item} key={item.id}></PropertiesCard>
          ))}
        </div>

        <div>
          <p className="text-3xl text-center mt-10 font-bold mb-5">Agents</p>
          <hr />
          <div>
            {Agents.map((item1) => (
              <AgentsCard key={item1.id} item1={item1}></AgentsCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Properties;
