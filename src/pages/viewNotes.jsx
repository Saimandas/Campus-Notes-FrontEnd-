import axios from "axios";
import { useEffect, useState } from "react";



const ViewNotes = () => {
   

    const [notes, setnotes] = useState([])
    console.log(notes);

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
        return  <ul className=" bg-white rounded-lg font-semibold text-base" key={e._id} >
        <li><div className="mt-10 h-10  shadow-lg flex justify-around ">
            <div className=" mr-9 w-[40%] pl-16 py-2">{e.notesName}</div>
            <div className=" py-1 flex w-[60%]  pl-[30%]  justify-around items-center ">
           
            </div></div></li>
    </ul>
       })}
        </div>
    </div>
  )
}

export default ViewNotes