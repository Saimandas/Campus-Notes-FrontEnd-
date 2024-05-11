import { Link } from "react-router-dom"


const Home = () => {
  return (
      <div className="flex h-[100vh] w-screen justify-center p-8  bg-gradient-to-r from-sky-500 to-indigo-500">
      <div className=' h-8 w-8 fixed right-2 top-2'>  </div>
  <div className="absolute top-[10%] flex h-72 w-72 items-center justify-center rounded-full bg-green-500 overflow-hidden">
  <img  src="https://scontent.fgau3-3.fna.fbcdn.net/v/t39.30808-6/431627966_798034799015242_4225306771030207433_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=alyuUq22TvMQ7kNvgHOgwxB&_nc_ht=scontent.fgau3-3.fna&oh=00_AfAquoGoKp3bJtNbLSO5hbGdq9gx6D-PrCUZv8bmpGuCpQ&oe=663EA3ED" alt="" className=' w-full h-full' />
  </div>
  
  <div className="absolute bottom-20  h-[40%] w-[80%] flex-col items-center grid grid-cols-2 sm:flex sm:gap-5 sm:flex-row sm:justify-center">
    <Link to={"/viewNotes"}><button className=" w-36 h-16 bg-orange-500 shadow-xl rounded mb-36"><h1 className=" text-white font-mono font-bold">View Notes</h1></button></Link>
    <Link to={'/upload'}><button className=" w-36 h-16 bg-orange-500 shadow-xl rounded mb-36"><h1 className=" text-white font-mono font-bold">Upload Notes</h1></button></Link>
   <Link to={'/register'}> <button className=" w-36 h-16 bg-orange-500 shadow-xl rounded mb-36  text-white font-mono font-bold">Register</button></Link>
   <Link to='/login'><button className=" w-36 h-16 bg-orange-500 shadow-xl rounded mb-36  text-white font-mono font-bold">Login</button></Link>
  </div>
  </div>
  
    )
  }
  


export default Home