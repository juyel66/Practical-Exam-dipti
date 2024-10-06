const AgentsCard = ({ item1 }) => {
  //   console.log(item1);
  const { name, email, phone, image } = item1;
  return (
    <div>
      <div className="card lg:mt-10 mt-5 border-2 border-gray-800 bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="flex gap-2">
            <div>
                <img className="h-[90px] rounded-full w-[90px]" src= {image} alt="" />

            </div>
            <div>
              <h2 className="card-title">{name}</h2>
              <p>{email}</p>
              <p>{phone}</p>
            </div>
          </div>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </div>
  );
};

export default AgentsCard;
