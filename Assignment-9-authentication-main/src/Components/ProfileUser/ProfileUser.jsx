import { Link } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";
import { Helmet } from "react-helmet-async";


const ProfileUser = () => {
    const { user } = UseAuth();

    return (
        <div>
            <Helmet><title>User Profile</title></Helmet>
            <div className="flex mt-10 justify-center">
                <div className="card border-2 border-gray-600   card-compact w-[800px] bg-base-100 shadow-xl">
                    <p className="text-center underline">
                        If you provide valid photo url during registration then photo will show here </p>

                    <figure><img className="w-[300px] pt-4 rounded-full" src={user.photoURL} alt="Shoes" /></figure>

                    <div className="card-body">
                        <h2 className="card-title text-3xl text-center">Name: {user?.displayName}</h2>
                        <p className="text-xl">Email:<span className="font-bold">{user?.email}</span></p>
                        <p className="break-all text-xl ">photoURL :<span className="font-bold">{user?.photoURL}</span> </p>
                        <div className="card-actions lg:space-x-3 justify-center">
                            <Link to='/'><button className="btn mt-10 outline mb-5 text-green-500 text-xl">Back to home</button></Link>
                            <Link to='/updateProfile'><button className="btn mt-10 outline mb-5 text-green-500 text-xl">Update Profile</button></Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProfileUser;