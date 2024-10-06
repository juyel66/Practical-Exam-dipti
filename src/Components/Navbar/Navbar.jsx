import { Link, NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import UseAuth from "../Hooks/UseAuth";
import {  toast } from "react-toastify";


const Navbar = () => {
  const { logOut, user } = UseAuth();


 const handleLogout = ()=>{
  logOut()
  .then(()=>{
    toast.error("User logged out successful")
  })
  .catch(error=>{
    console.error(error.message)
  })
 }

  const links = <>
    <li><NavLink className={({ isActive }) => isActive ? 'btn btn-outline btn-success text-bold text-xl' : 'text-xl font-bold'} to="/">Home</NavLink></li>
 
  
    
    
      <li><NavLink className={({ isActive }) => isActive ? 'btn btn-outline btn-success text-bold text-xl' : 'text-xl font-bold'} to="/aboutUs">About us</NavLink></li>

      <li><NavLink className={({ isActive }) => isActive ? 'btn btn-outline btn-success text-bold text-xl' : 'text-xl font-bold'} to="/contact">Contact Us</NavLink></li>

      <li><NavLink className={({ isActive }) => isActive ? 'btn btn-outline btn-success text-bold text-xl' : 'text-xl font-bold'} to="/comments">Comments</NavLink></li>
     
     {
      user &&
      <li><NavLink className={({ isActive }) => isActive ? 'btn btn-outline btn-success text-bold text-xl' : 'text-xl font-bold'} to="/properties">Properties</NavLink></li>
     }
    

  </>
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {
              links
            }
          </ul>
        </div>
        <a className="btn btn-ghost bg-green-400 text-white font-bold lg:text-2xl">JR Residential</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {
            links
          }
        </ul>
      </div>
      <div className="navbar-end space-x-2">
        <div>



        </div>
        {
          user ?
            <div>
              <div className="dropdown dropdown-hover">
              <Link to="/userProfile"> <div tabIndex={0} role="" className=" m-1">  <img className="w-12 rounded-full h-12 border-2 border-green-500" src={user.photoURL} alt="" /> </div> </Link>
                <ul tabIndex={0} className="dropdown-content z-[1]  text-left menu p-2 shadow  rounded-box lg:w-40   w-32">

                  <li className=" text-black lg:text-xl ">{user.displayName}</li>

                </ul>
              </div>

            </div> :
            <FaUserCircle className="w-11 h-16"></FaUserCircle>
        }
      
        {
          user ?
            <Link onClick={handleLogout} className="btn  lg:w-[120px] text-white bg-green-500">Log out </Link> :
            <div className="flex gap-2">
              <p to="/login" className="btn lg:w-[120px] text-white bg-green-500">Login </p>
              {/* <Link to="/register" className="btn lg:flex hidden lg:w-[120px] text-white bg-green-500">Register </Link> */}
            
            </div>
        }

        
        

      </div>
    </div>
  );
};

export default Navbar;