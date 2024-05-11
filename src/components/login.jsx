import axios from "axios"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { userLogin} from "@/redux/authSlice"
import { Loader2 } from "lucide-react"
const Login = () => {
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [isSubmitting, setisSubmitting] = useState(false)
  const [loginMessage, setloginMessage] = useState("")
  const dispatch= useDispatch()
  
  const login= async (e)=>{
   e.preventDefault()
    try {
        setisSubmitting(true)
        const response= await axios.post("/users/login",{email,password})
        setloginMessage(response.data.message)
        console.log(response.data.user);
        dispatch(userLogin(response.data.user))
        console.log(response.data.message);
    } catch (error) {
        setloginMessage(error.response.data.message)
        
    }finally{
        setisSubmitting(false)
    }
  }
  return (
    <div className=" w-screen h-screen flex justify-center items-center bg-gradient-to-r from-sky-500 to-indigo-500 ">
     <div className=" w-[84%] h-[55%] sm:w-[30%]  border-2 rounded-md "> 
     <p className=" text-black font-bold text-xl absolute left-[47%] mt-14 text-center">Login</p>
      <form className=" m-10 mt-52" onSubmit={login}>
        
        <label> <h1 className=" text-white font-semibold">Email:</h1></label>
        <input type="email" value={email} required={true} onChange={(e)=>{setemail(e.target.value)}} className=" bg-sky-300 outline-none  rounded-lg w-64 mr-5 h-10 p-3 sm:w-[92%] text-blue-150  text-white mt-2 " />
        <label> <h1 className=" text-white font-semibold">Password:</h1></label>
        <input type="password" value={password} required={true} onChange={(e)=>{setpassword(e.target.value)}} className=" bg-sky-300 outline-none rounded-lg w-64 mr-5 p-3 h-10 sm:w-[92%] text-blue-150  text-white mt-2 " />
        <button type="submit" disabled={isSubmitting} className=" border-1 rounded-md h-12 w-24 mt-6 shadow-lg  bg-green-500">Login</button>
       {
        loginMessage &&  <p className={` font-semibold ${loginMessage==="user succesfyly logged in" && ' text-green-500'} `}>{loginMessage}
        </p>
        
       }
       {
        isSubmitting && <Loader2 className=" animate-spin"></Loader2>
       }
      </form>
        
      
     </div>
    
    </div>
  )
}

export default Login