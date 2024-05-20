import axios from "axios"
import { LucideLoaderCircle } from "lucide-react"
import { useEffect, useState } from "react"



const NotesForverification = () => {

    const [notes, setnotes] = useState([])
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
      setisSubmitting(true)
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
      setisSubmitting(false)
    }finally{
      setisSubmitting(false)
    }
   }

   console.log(notes);
  return notes.length<1 ?  <h1>No notes are avilable</h1> :  (
    <div className="flex h-screen w-screen items-center justify-center bg-black">
    <div className="min-h-[85%] w-[100%] bg-white p-1 sm:p-6 sm:w-[85%] mt-4 p-1 ">
      
   { !isSubmitting? (notes.map((e)=>{
         
        return  <ul className="rounded p-2 " key={e._id}>
            <li className="flex justify-between items-center border-blue-200 rounded border-2 p-1">
              <h1 className="font-bold font-serif">{e.notesName}</h1>
              <h1 className="font-bold font-serif">{e.depertmentname.depertmentName}</h1>
              <h1 className="font-bold font-serif">{e.subjectname.name}</h1>
              <div className="flex gap-2">
                <a href={e.imageUrl}><button className="rounded px-2 bg-yellow-400 p-1 text-black font-semibold">View</button></a>
                <button className="rounded px-2 bg-green-400 p-1 text-black font-semibold" disabled={isSubmitting} onClick={()=>{verify(e._id)}}><h1>Approve</h1></button>
                <button className="rounded px-2 bg-red-400 p-1 text-black font-semibold" disabled={isSubmitting} onClick={()=>{reject(e._id)}} ><h1>Reject</h1></button>
              </div>
            </li>
          </ul>
       
    })):<LucideLoaderCircle className=" animate-spin w-full h-full"></LucideLoaderCircle>}
     </div>
      </div>
  
  
  )
}

export default NotesForverification