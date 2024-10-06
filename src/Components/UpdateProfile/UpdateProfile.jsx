// import { Link } from "react-router-dom";
// import UseAuth from "../Hooks/UseAuth";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet-async";


const UpdateProfile = () => {
    // const {user} = UseAuth()
    const { user } = useContext(AuthContext)
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value
        const photo = e.target.photo.value
        // console.log(name,photo)
        updateProfile(user, {
            displayName: name, photoURL: photo
        }).then(() => {
            toast.success("User update successfully", {
                theme: "colored"
            })


        }).catch((error) => {
            console.error(error);

        });
    }


    return (
        <div>
            <Helmet>
                <title>Update Profile</title>
            </Helmet>
            <div>

                <div className="hero  ">
                    <div className="hero-content  flex-col ">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl text-green-600 font-bold">Update your Profile</h1>

                        </div>
                        <div className="card shrink-0 border-2 bg-gray-100 border-gray-400 w-full max-w-sm shadow-2xl ">
                            <form  onSubmit={handleSubmit} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input defaultValue={user?.displayName} type="name" name="name" placeholder="Type your new name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">PhotoURL</span>
                                    </label>
                                    <input defaultValue={user?.photoURL} type="text" name="photo" placeholder="Type your PhotoURL" className="input input-bordered" required />
                                    <label className="label">

                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input  className="btn text-xl bg-yellow-500" type="submit" value="Update" />


                                </div>
                            </form>



                        </div>
                    </div>
                </div>

            </div>
            <ToastContainer></ToastContainer>

        </div>
    );
};

export default UpdateProfile;