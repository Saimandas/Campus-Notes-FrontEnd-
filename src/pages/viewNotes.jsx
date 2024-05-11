import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const ViewNotes = () => {
   

    const [notes, setnotes] = useState([])

    useEffect(()=>{
        async function get(){
            const response= await axios.get('/users/notes')
            setnotes(response.data.notes)
        }
        get()
    },[])
    return (
   
    <div className=" w-full h-full flex justify-center pt-10 ">
        <div className=" w-[80%]  bg-blue-500 mt-14 px-4 ">
       {notes.map((e)=>{
        console.log(e.notesName);
        return  <ul className=" bg-white" key={e._id}>
        <li ><div className="mt-10 h-10 rounded-md shadow-lg flex justify-around">
            <div className=" mr-9 w-[40%] pl-16 py-2">{e.notesName}</div>
            <div className=" py-1 flex w-[60%]  bg-red-50 pl-[30%]  justify-around">
            <a href={e.imageUrl}><button className=" bg-yellow-400 w-14 shadow-md  active:scale-50">view</button></a>
            </div></div></li>
    </ul>
       })}
        </div>
    </div>
  )
}

export default ViewNotes