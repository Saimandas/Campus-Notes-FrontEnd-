import axios from "axios"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { userLogin} from "@/redux/authSlice"
import { Link, useNavigate } from "react-router-dom"
import { Loader2 } from "lucide-react"

const Login = () => {
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [isSubmitting, setisSubmitting] = useState(false)
  const [loginMessage, setloginMessage] = useState("")
  const dispatch= useDispatch()
  const navigate = useNavigate()
  const login= async (e)=>{
   e.preventDefault()
    try {
        setisSubmitting(true)
        const response= await axios.post("/users/login",{email,password})
        setloginMessage(response.data.message)
        console.log(response.data.user);
        dispatch(userLogin(response.data.user))
        console.log(response.data.message);
        if (response.data.message==="user succesfyly logged in") {
          navigate('/')
        }
    } catch (error) {
        setloginMessage(error.response.data.message)
        
    }finally{
        setisSubmitting(false)
    }
  }
  return (
    <>
    <section className="bg-gray-50 dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"/>
          Campus-Notes    
      </a>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" value={email} onChange={(e)=>{setemail(e.target.value)}} name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required=""/>
                  </div>
                  <div>
                      <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" value={password} onChange={(e)=>{setpassword(e.target.value)}} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div className="flex items-center justify-between">
                      <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                          </div>
                          <div className="ml-3 text-sm">
                            <label for="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                          </div>
                      </div>
                  </div>
                  {
                    isSubmitting && <Loader2  className=" animate-spin"></Loader2>
                  }
                  <button disabled={isSubmitting} className="w-full bg-blue-700 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={login}>Sign In</button>
                  {
                    loginMessage && <p className="text-gray-500 dark:text-gray-300">{loginMessage}</p>
                  }
                  
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet?<Link to={'/register'}><h1 href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</h1></Link>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
</>
  
  )}


export default Login