import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useDebouncedCallback } from "use-debounce"

const Register = () => {
   const [username, setusername] = useState("")
   const [email, setemail] = useState("")
   const [password, setpassword] = useState("")
   const [isCheckingUsername, setisCheckingUsername] = useState(false)
   const [isSubmitting, setisSubmitting] = useState(false)
   const [userameMessage, setuserameMessage] = useState("")
   const [displayUsername, setdisplayUsername] = useState("")
   const debounce= useDebouncedCallback((e)=>{setusername(e) },500)
   const [signUpMessage, setsignUpMessage] = useState("")
   useEffect(()=>{
    async function check(){
      if (username) {
        setisCheckingUsername(true)
        try {
          const response= await axios.get(`users/checkUsername/${username}`)
          setuserameMessage(response.data.message)
        } catch (error) {
          setuserameMessage(error.response.data.message)
        }
      }
        
      
    }
    check()
   },[username])

   const submit = async(e)=>{
    e.preventDefault()
   setisSubmitting(true)
    try {
    const response=await axios.post("/users/register",{username:username,password:password,email:email})
    setsignUpMessage(response.data.message)
    } catch (error) {
      console.log(error);
      setsignUpMessage(error.response.data.error)
    }finally{
      setisSubmitting(false)
    }
   }
  
  return (
    <div className=" w-screen h-screen flex justify-center items-center bg-gradient-to-r from-sky-500 to-indigo-500 ">
     <div className=" w-[84%] h-[75%] sm:w-[30%]  border-2 rounded-md "> 
     <p className=" text-black font-bold text-xl absolute left-[46%] mt-14">Sign Up</p>
      <form className=" m-10 mt-52" onSubmit={submit}>
        <label> <h1 className=" text-white font-semibold">Username:</h1></label>
        <input type="text" value={displayUsername} onChange={(e)=>{debounce(e.target.value),setdisplayUsername(e.target.value)}} className=" bg-sky-300 outline-none p-3 rounded-lg w-64 mr-5 h-10 sm:w-[92%] text-blue-150  text-white " />
        { isCheckingUsername&&username!=="" && <p className={userameMessage==="username is unique"? ' text-green-500':' text-red-500'}>{userameMessage}</p>}
        <label> <h1 className=" text-white font-semibold">Email:</h1></label>
        <input type="email" value={email} required={true} onChange={(e)=>{setemail(e.target.value)}} className=" bg-sky-300 outline-none  rounded-lg w-64 mr-5 h-10 p-3 sm:w-[92%] text-blue-150  text-white mt-2 " />
        <label> <h1 className=" text-white font-semibold">Password:</h1></label>
        <input type="password" value={password} required={true} onChange={(e)=>{setpassword(e.target.value)}} className=" bg-sky-300 outline-none rounded-lg w-64 mr-5 p-3 h-10 sm:w-[92%] text-blue-150  text-white mt-2 " />
        <button type="submit" disabled={isSubmitting} className=" border-1 rounded-md h-12 w-24 mt-6 shadow-lg  bg-green-500">Submit</button>
        <p>
          {signUpMessage}
        </p>
      </form>
      <div className="text-center ">
          <p className=" text-white fonts font-semibold">
            Already a member?{' '}
          </p>
          <p className=" text-black fonts ">
          click here to login <Link className=" border-b border-red-700 text-red-700 font-semibold" to='/login'>Login</Link> 
          </p>
        </div>    
      
     </div>
    
    </div>
  )
}

export default Register