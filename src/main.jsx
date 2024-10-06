import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import UpdateProfile from './Components/UpdateProfile/UpdateProfile';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Home from './Components/Home/Home';
// import ViewProperty from './Components/ViewProperty/ViewProperty';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import AuthProvider from './Components/AuthProvider/AuthProvider';
import ProfileUser from './Components/ProfileUser/ProfileUser';
import SingleFamily from './Components/SingleFamily/SingleFamily';
import SingleViewProperty from './Components/SingleViewProperty/SingleViewProperty';
import TownHouse from './Components/TownHouses/TownHouse/TownHouse';
import TownViewProperty from './Components/TownHouses/TownViewProperty/TownViewProperty';
import ApartmentsCard from './Components/Apartments/ApartmentsCard/ApartmentsCard';
import ApartmentsViewProperty from './Components/Apartments/ApartmentsViewProperty/ApartmentsViewProperty';
import StudentHouse from './Components/StudentHouse/StudentHouse/StudentHouse';
import StudentViewProperty from './Components/StudentHouse/StudentViewProperty/StudentViewProperty';
import SeniorLivingHouse from './Components/SeniorLivingHouse/SeniorLivingHouse/SeniorLivingHouse';
import SeniorViewProperty from './Components/SeniorLivingHouse/SeniorViewProperty/SeniorViewProperty';
import Vacations from './Components/Vacations/Vacations/Vacations';
import VacationViewProperty from './Components/Vacations/VacationViewProperty/VacationViewProperty';
import { HelmetProvider } from 'react-helmet-async';
import PrivetRout from './Components/PrivetRout/PrivetRout';
import Contact from './Components/Contact/Contact';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Comments from './Components/Comments/Comments';
import Properties from './Components/Properties/Properties';
import AboutUs from './Components/AboutUs';
// import {HelmetProvider} from "react-helmet";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>

      },
     
  
    
      {
        path: "/userProfile",
        element: <PrivetRout><ProfileUser></ProfileUser></PrivetRout>
      },
      {
        path:"/contact",
        element:<Contact></Contact>
      },
      {
        path:"/aboutUs",
        element: <AboutUs></AboutUs>
      },
      {
        path: "/singleFamily",
        element: <SingleFamily></SingleFamily>,
        loader: () => fetch('/singleFamily.json')
      },
      {
        path: "/SingleViewProperty/:id",
        element: <PrivetRout><SingleViewProperty></SingleViewProperty></PrivetRout>,
        loader: () => fetch("../singleFamily.json")

      },
      {
        path: "/townHouse",
        element: <TownHouse></TownHouse>,
        loader: () => fetch("TownHouse.json")
      },
      {
        path: "/townViewProperty/:id1",
        element: <PrivetRout><TownViewProperty></TownViewProperty></PrivetRout>,
        loader: () => fetch("../TownHouse.json")
      },
      {
        path: "/apartments",
        element: <ApartmentsCard></ApartmentsCard>,
        loader: () => fetch("apartments.json")

      },
      {
        path: "/apartmentsViewProperty/:id2",
        element: <PrivetRout><ApartmentsViewProperty></ApartmentsViewProperty></PrivetRout>,
        loader: () => fetch('../apartments.json')
      },
      {
        path: "/studentHouse",
        element: <StudentHouse></StudentHouse>,
        loader: () => fetch("StudentHouse.json")
      },
      {
        path: "/studentViewProperty/:id3",
        element: <PrivetRout><StudentViewProperty></StudentViewProperty></PrivetRout>,
        loader: () => fetch("../StudentHouse.json")
      },
      {
        path: "/seniorLivingHouse",
        element: <SeniorLivingHouse></SeniorLivingHouse>,
        loader: () => fetch("seniorLivingHouse.json")
      },
      {
        path: "/seniorViewProperty/:id4",
        element: <PrivetRout><SeniorViewProperty></SeniorViewProperty></PrivetRout>,
        loader: () => fetch("../seniorLivingHouse.json")
      },
      {
        path: "/vacationsRentals",
        element: <Vacations></Vacations>,
        // loader: ()=> fetch("vacations.json")
      },
      {
        path: "/vacationViewProperty/:id5",
        element: <PrivetRout><VacationViewProperty></VacationViewProperty></PrivetRout>,
        loader: () => fetch("../Vacations.json")
      },
      {
        path: "/comments",
        element:<Comments></Comments>
      },
      {
        path: "properties",
        element: <PrivetRout><Properties></Properties></PrivetRout>,
        loader: () => fetch("Properties.json"),
        
      }


    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    {/* <HelmetProvider></HelmetProvider> */}
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
      
    </HelmetProvider>
    
    <ToastContainer></ToastContainer>

  </React.StrictMode>,
)
