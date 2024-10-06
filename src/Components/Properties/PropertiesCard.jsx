import { MdRateReview } from "react-icons/md";
import { MdPointOfSale } from "react-icons/md";
import { ImPriceTag } from "react-icons/im";

const PropertiesCard = ({ item }) => {
  // console.log(item)
  const { title, short_description, review,image, sale_status, price, facilities } =
    item;
  return (
    <div>
       
      <div className="hero border-2 lg:[1000px] border-gray-900 rounded-xl mt-10 bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img 
            src={image}
            className="max-w-sm h-[300px]  w-[350px] rounded-lg shadow-2xl"
          />
          <div className="lg:w-[600px]">
            <h1 className="text-4xl font-bold">{title}</h1>
            <p className="py-6">{short_description}</p>

            <div className="flex items-center gap-2">
              <p className="text-3xl"><MdRateReview /></p>
              <p> {review}</p>
            </div>

            <div className="flex justify-between ">
                <div className="flex items-center mt-3">
                    <p className="text-3xl"><MdPointOfSale /></p>
                    <p className="text-xl">{sale_status}</p>
                
                </div>
                <div className="flex items-center">
                    <p className="text-3xl"><ImPriceTag></ImPriceTag></p>
                    <p className="text-xl">{price}</p>

                </div>
              </div>
              <div className="flex lg:gap-24  font-bold">
              <p >{facilities[0]}</p>
              <p >{facilities[1]}</p>
              <p >{facilities[2]}</p>
              </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertiesCard;
