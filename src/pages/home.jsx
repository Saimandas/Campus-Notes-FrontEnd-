import { Link, useNavigate } from "react-router-dom";
import img from '@/components/image/431627966_798034799015242_4225306771030207433_n (2).png'
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import {  LoaderPinwheelIcon } from "lucide-react";

// Author details
const author = {
  name: "Saiman Das",
  contactNumber: "9954261623",
  bio: "Student, Fullstack Devloper "
 // imageUrl: "https://example.com/author-image.jpg", // Replace with actual image URL
};
const Home = () => {
  const navigate= useNavigate()
  const [isLoggedin, setisLoggedin] = useState(false)
   const status= useSelector((state)=>{return state.auth.status})
   useEffect(()=>{
    setisLoggedin(status)
   },[status])
  const [isSubmitting, setisSubmitting] = useState(false)
   const logout= async()=>{
    try {
     const result= confirm("Are you sure to Log-Out ")
     if (result) {
      setisSubmitting(true)
      const response= await axios.post('/users/logout');
      if (response) {
        alert("user succesfully logout")
        setisLoggedin(false);
        setisSubmitting(false);
        navigate("/") 
     }
     
      }
    } catch (error) {
      console.log(error);
    }
   }
   if (isSubmitting) {
    return <LoaderPinwheelIcon className=" w-full h-full animate-spin"></LoaderPinwheelIcon>
   }else{
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-sky-500 to-indigo-500">
      <div className='fixed top-2 right-2 h-8 w-8'></div>
      <div className="relative flex items-center justify-center h-72 w-72 bg-green-500 rounded-full overflow-hidden ">
        <img src={img} alt="" className='w-full h-full  ' />
      </div>
      <div className="flex justify-center mt-8 w-full">
        <div className="grid grid-cols-2 gap-5">
          <Link to={"/viewNotes"}><button className="w-36 h-16 bg-orange-500 shadow-xl rounded"><h1 className="text-white font-mono font-bold">View Notes</h1></button></Link>
          <Link to={'/upload'}><button className="w-36 h-16 bg-orange-500 shadow-xl rounded"><h1 className="text-white font-mono font-bold">Upload Notes</h1></button></Link>
          <Link to={'/register'}><button className="w-36 h-16 bg-orange-500 shadow-xl rounded text-white font-mono font-bold">Register</button></Link>
          {
            isLoggedin ? <Link to='#'><button className="w-36 h-16 bg-orange-500 shadow-xl rounded text-white font-mono font-bold" onClick={logout}>LogOut</button></Link>:
            <Link to='/login'><button className="w-36 h-16 bg-orange-500 shadow-xl rounded text-white font-mono font-bold">Login</button></Link>
          }
         
        </div>
      </div>
      <footer className="mt-8  sm:mt-14 text-center text-white pb-8">
        <p>Saiman Das | Contact: 9954261623</p>
        <div className="mt-4">
          <img src={author.imageUrl} alt={author.name} className="w-16 h-16 rounded-full mx-auto mb-2" />
          <p className="text-sm">{author.name}</p>
          <p className="text-xs">{author.bio}</p>
        </div>
      </footer>
    </div>
  );}
};

export default Home;
