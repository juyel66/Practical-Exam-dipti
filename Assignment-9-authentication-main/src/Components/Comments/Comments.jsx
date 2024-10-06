import moment from "moment";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import {  toast } from "react-toastify";

const Comments = () => {

    const handleComment = (e)=>{
        e.preventDefault();
        e.target.reset
        toast.success("Your Comment send Successful")

        
    }


    const [formattedDateTime, setFormattedDateTime] = useState('');

    useEffect(() => {
      const updateTime = () => {
        const formattedDateTime = moment().format(" MMMM Do YYYY, h:mm:ss a");
        setFormattedDateTime(formattedDateTime);
      };
      updateTime();
      const intervalId = setInterval(updateTime, 1000);
      return () => clearInterval(intervalId);
    }, []);






  return (
 
    <div>
      <Helmet><title>Comments</title></Helmet>

       
    
          <p className="text-5xl text-ce mb-10 flex rounded-xl items-center justify-center text-white bg-gray-400 h-20">{formattedDateTime}</p>

          <p className="text-4xl font-bold mb-10 text-center">Add your experience about our website and <br /> our property dealing</p>

    

       

<form onSubmit={handleComment}> 
<div className="form-control">
        <label className="label">
          <span className="label-text text-xl">If you login (Name and Email) are not required. You can ignor it.</span>
        </label>
        <input
          type="text"
          placeholder="Your Name"
          className="input input-bordered"
          required
        />
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          type="text"
          placeholder="Your Email"
          className="input input-bordered"
          required
        />
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">Password</span>
        </label>

        <textarea name="" id="" cols="30" className="border border-black rounded-xl" placeholder="Type your message"  rows="20"></textarea>
        <button className="btn mt-5 bg-green-500 text-xl text-white">Send your comment</button>
      


      </div>
</form>
    </div>
  );
};

export default Comments;
