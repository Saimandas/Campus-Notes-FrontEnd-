import axios from "axios"
import { Loader2 } from "lucide-react"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
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
   const navigate= useNavigate()
   const google= async ()=>{
    try {
      const response= await axios.get("users/loginWithGoogle")
      
      console.log(response);
    } catch (error) {
      setsignUpMessage(error.response.data.message)
      console.log(error);
    }
   }
   useEffect(()=>{
    async function check(){
      if (username) {
        setisCheckingUsername(true)
        try {
          const response= await axios.get(`/users/checkUsername/${username}`)
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
    if (response.data.message==="user succesfully registered") {
      navigate('/')
    }

    } catch (error) {
      console.log(error);
      setsignUpMessage(error.response.data.message)
    }finally{
      setisSubmitting(false)
    }
   }
  
  return (
   <>
    <section className="bg-gray-50 dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" className="flex items-center mb-2 text-2xl font-semibold text-gray-900 dark:text-white">
          <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"/>
          Notes-Campus    
      </a>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
              <div>
                      <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your username</label>
                      <input type="username" value={displayUsername} onChange={(e)=>{debounce(e.target.value),setdisplayUsername(e.target.value)}}   name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required=""/>
                      { isCheckingUsername&&username!=="" && <p className={userameMessage==="username is unique"? ' text-green-500':' text-red-500'}>{userameMessage}</p>}
                  </div>
                  <div>
                      <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" value={email} onChange={(e)=>{setemail(e.target.value)}} name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required=""/>
                  </div>
                  <div>
                      <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" value={password} onChange={(e)=>{setpassword(e.target.value)}} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div className="flex items-center justify-center w-full  hidden dark:bg-gray-800">
    <button className="px-4 py-2 border  gap-2 w-full flex justify-center border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150" onClick={google}>
        <img className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo"/>
        <span>Continue with Google</span>
    </button>
</div>
                  <div className="flex items-center justify-between">
                      <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                          </div>
                          <div className="ml-3 text-sm">
                            <label className="text-gray-500 dark:text-gray-300">Remember me</label>
                          </div>
                      </div>
                      
                  </div>
                  {
                    isSubmitting && <Loader2  className=" animate-spin"></Loader2>
                  }
                  <button disabled={isSubmitting} className="w-full bg-blue-700 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={submit}>Sign Up</button>
                  {
                    signUpMessage && <p className="text-gray-500 dark:text-gray-300">{signUpMessage}</p>
                  }
                  
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      already have an account yet?<Link to={'/login'}><h1 href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign In</h1></Link>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
   </>
  )
}

export default Register