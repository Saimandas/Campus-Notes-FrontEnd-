import axios from "axios"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"


const NotesForverification = () => {

    const [notes, setnotes] = useState([{}])
    const [error, seterror] = useState("")
    const userData= useSelector((e)=>{return e.auth.userData})
   useEffect(()=>{
     const getNotes=async ()=>{
        try {
            const response= await axios.get("/users/listNotesForAdmin",{email:userData.email})
            setnotes(response.data.allNotes)
        } catch (error) {
            seterror(error.response.data.message)
        }
    }
    console.log(error);
    
    getNotes()
   },[])

   const verify= async (id)=>{
    try {
      const response = await axios.post('/users/verify-notes',{
        notes_id:id,
        verifyFlag:true
      })
      const arr= notes.filter((e)=>{
        return e._id !== id
      })
      setnotes(arr)
    } catch (error) {
      console.log(error);
    }
   }

   const reject = async (id)=>{
    try {
      const response = await axios.post('/users/verify-notes',{
        notes_id:id,
        verifyFlag:false
      })
      const arr= notes.filter((e)=>{
        
        return  e._id !== id
      })
      setnotes(arr)
    } catch (error) {
      console.log(error);
    }
   }

   console.log(notes);
  return notes.length<1 ?  <h1>No notes are avilable</h1> :  (
    <div className=" w-full h-full flex justify-center pt-10 ">
        <div className=" w-[80%]  bg-blue-500 mt-14 px-4 ">
       {notes.map((e)=>{
        console.log(e.notesName);
        return  <ul className=" bg-white" key={e._id}>
        <li ><div className="mt-10 h-10 rounded-md shadow-lg flex justify-around">
            <div className=" mr-9 w-[40%] pl-16 py-2">{e.notesName}</div>
            <div className=" py-1 flex w-[60%]  bg-red-50 pl-[30%]  justify-around"> <a href={e.imageUrl}><button className=" bg-yellow-400 w-14 shadow-md  active:scale-50">view</button></a>
            <button className=" bg-green-400 w-20  shadow-md rounded  active:scale-50 " onClick={()=>{verify(e._id)}}>approve</button> 
            <button className=" bg-red-400 w-14 shadow-md rounded active:scale-50 " onClick={()=>{reject(e._id)}}>Reject</button></div></div></li>
    </ul>
       })}
        </div>
    </div>
  )
}

export default NotesForverification