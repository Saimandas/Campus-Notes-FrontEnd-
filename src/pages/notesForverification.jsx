import axios from "axios"
import { useEffect, useState } from "react"



const NotesForverification = () => {

    const [notes, setnotes] = useState([{}])
    const [error, seterror] = useState("")
    const [isSubmitting, setisSubmitting] = useState(false)
    //const userData= useSelector((e)=>{return e.auth.userData})
   useEffect(()=>{
     const getNotes=async ()=>{
        try {
            const response= await axios.get("/users/listNotesForAdmin")
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
      setisSubmitting(true)
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
      setisSubmitting(false)
    }finally{
      setisSubmitting(false)
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
      setisSubmitting(true)
    } catch (error) {
      console.log(error);
      setisSubmitting(false)
    }finally{
      setisSubmitting(false)
    }
   }

   console.log(notes);
  return notes.length<2 ?  <h1>No notes are avilable</h1> :  (
    <div className=" w-full h-full flex justify-center pt-10 ">
        <div className=" w-[80%]  bg-blue-500 mt-14 px-4 ">
       {notes.map((e)=>{
        console.log(e.notesName);
        return  <ul className=" bg-white" key={e._id}>
        <li ><div className="mt-10 h-10 rounded-md shadow-lg flex justify-around  ">
            <div className=" mr-9 w-[40%] pl-16 py-2 text-black font-semibold">{e.notesName}</div>
            <div><h1>{e.subject}</h1></div>
            <div><h1>{e.depertment}</h1></div>
            <div className=" py-1 flex w-[60%]  bg-red-50 pl-[30%]  justify-around"> <a href={e.imageUrl}><button className=" bg-yellow-400 w-14 shadow-md  active:scale-50 ">view</button></a>
            <button className=" bg-green-400 w-20  shadow-md rounded  active:scale-50 " disabled={isSubmitting} onClick={()=>{verify(e._id)}}>{isSubmitting?<h1>Please wait...</h1>:<h1>Approve</h1>}</button> 
            <button className=" bg-red-400 w-14 shadow-md rounded active:scale-50" disabled={isSubmitting} onClick={()=>{reject(e._id)}}>{isSubmitting?<h1>Please wait...</h1>:<h1>Approve</h1>}</button></div></div></li>
    </ul>
       })}
        </div>
    </div>
  )
}

export default NotesForverification