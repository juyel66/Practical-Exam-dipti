import { useLoaderData } from "react-router-dom";
import StudentHouseCard from "../StudentHouseCard/StudentHouseCard";


const StudentHouse = () => {
    const studentHouse = useLoaderData();
    console.log(studentHouse);
    return (
        <div>
            <h1 className="text-3xl text-center font-bold mt-7 mb-6">Student Housing</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-10">
                {
                    studentHouse.map(item => <StudentHouseCard key={item.id3} item={item}></StudentHouseCard> )
                }
            </div>
            
        </div>
    );
};

export default StudentHouse;