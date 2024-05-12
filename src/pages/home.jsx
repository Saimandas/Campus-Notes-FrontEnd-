import { Link } from "react-router-dom";

// Author details
const author = {
  name: "Saiman Das",
  contactNumber: "9954261623",
  bio: "Student, Fullstack Devloper ",
 // imageUrl: "https://example.com/author-image.jpg", // Replace with actual image URL
};

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-sky-500 to-indigo-500">
      <div className='fixed top-2 right-2 h-8 w-8'></div>
      <div className="relative flex items-center justify-center h-72 w-72 bg-green-500 rounded-full overflow-hidden">
        <img src="https://scontent.fgau3-3.fna.fbcdn.net/v/t39.30808-6/431627966_798034799015242_4225306771030207433_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=alyuUq22TvMQ7kNvgHOgwxB&_nc_ht=scontent.fgau3-3.fna&oh=00_AfAquoGoKp3bJtNbLSO5hbGdq9gx6D-PrCUZv8bmpGuCpQ&oe=663EA3ED" alt="" className='w-full h-full' />
      </div>
      <div className="flex justify-center mt-8 w-full">
        <div className="grid grid-cols-2 gap-5">
          <Link to={"/viewNotes"}><button className="w-36 h-16 bg-orange-500 shadow-xl rounded"><h1 className="text-white font-mono font-bold">View Notes</h1></button></Link>
          <Link to={'/upload'}><button className="w-36 h-16 bg-orange-500 shadow-xl rounded"><h1 className="text-white font-mono font-bold">Upload Notes</h1></button></Link>
          <Link to={'/register'}><button className="w-36 h-16 bg-orange-500 shadow-xl rounded text-white font-mono font-bold">Register</button></Link>
          <Link to='/login'><button className="w-36 h-16 bg-orange-500 shadow-xl rounded text-white font-mono font-bold">Login</button></Link>
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
  );
};

export default Home;
