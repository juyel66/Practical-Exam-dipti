import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";


const PrivetRout = ({children}) => {
    const {user , loading} = UseAuth();
    const location = useLocation()
    console.log(location.pathname)

    if(loading){
        return <div className="flex justify-center"><span className="loading  loading-spinner w-40 "></span> </div>
    }
  
    

    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to="/login">

    </Navigate>
};

export default PrivetRout;