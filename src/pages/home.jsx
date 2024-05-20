import { Link, useNavigate } from "react-router-dom";
import img from '@/components/image/431627966_798034799015242_4225306771030207433_n (2).png'
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import {  LoaderPinwheelIcon } from "lucide-react";
import { userLogin, userlogout } from "@/redux/authSlice";
import loginImage from '../components/image/log-in.png'

// Author details
const author = {
  name: "Saiman Das",
  contactNumber: "9954261623",
  bio: "Student, Fullstack Devloper "
 // imageUrl: "https://example.com/author-image.jpg", // Replace with actual image URL
};
const Home = () => {
  const navigate= useNavigate()
  const dispatch = useDispatch()
  const [isLoggedin, setisLoggedin] = useState(false)
  const [isAdmin, setisAdmin] = useState(false)
  const userData= useSelector((state)=>{return state.auth.userData})
  
 useEffect(()=>{
  async function getCurrentUser(){
    try {
      const response = await axios.get('/users/getCurrentUser');
      console.log(response.data);
      if (response.data.message==="user get succcesfully"){
         dispatch(userLogin(response.data.user))
      }
    } catch (error) {
      console.log(error);
    }
  }
 if (!userData) {
  getCurrentUser()
 }
 },[dispatch,userData])


useEffect(()=>{
  if (userData) {
    setisLoggedin(true)
  }else{
    setisLoggedin(false)
  }
},[userData])
   console.log(userData);
   
   console.log(isAdmin);
   
  const [isSubmitting, setisSubmitting] = useState(false)
   const logout= async()=>{
    try {
     const result= confirm("Are you sure to Log-Out")
     if (result) {
      setisSubmitting(true)
      const response= await axios.post('/users/logout');
      setisLoggedin(false)
      console.log(response);
      if (response) {
        alert("user succesfully logout")

        setisSubmitting(false);
        dispatch(userlogout())
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
      <div className=" fixed right-8 top-10 sm:right-28"><button><Link to={'/forAdmin'}><img src={loginImage} width={'40px'} /></Link></button></div>
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
      <footer className="mt-[7rem]  sm:mt-14 text-center text-white pb-8">
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
