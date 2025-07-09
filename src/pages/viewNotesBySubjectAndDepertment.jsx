import axios from "axios"
import { Loader2 } from "lucide-react"
import { forwardRef, useEffect, useState } from "react"


const ViewNotesBySubjectAndDepertment = (props,ref) => {
     const{depertmentRef,subjectRef}=ref
     const [notes, setnotes] = useState([{}])
     const [isGetting, setisGetting] = useState(false)
     console.log(notes);
    useEffect(()=>{
        const submit= async()=>{
            setisGetting(true)
            try {
               console.log("hello");
                const response = await axios.get(`/users/Sub-notes/${subjectRef.current}`);
                setnotes(response.data.notes)
            } catch (error) {
                console.log(error);
            }finally{
                setisGetting(false)
            }
         }

         submit()
    },[])
    return notes?.length>=1?(
    <>
      { 
        isGetting ? <Loader2 className=" animate-spin"></Loader2>:
      <div className=" w-full h-full flex justify-center pt-10 ">
        <div className=" w-[80%]  bg-blue-500 mt-14 px-4 ">
       {notes.map((e)=>{
        console.log(e.notesName);
        return  <ul className=" bg-white rounded-lg font-semibold text-base" key={e._id} >
        <li><div className="mt-10 h-10  shadow-lg flex justify-around ">
            <div className=" mr-9 w-[40%] pl-16 py-2">{e.notesName}</div>
            <div className=" py-1 flex w-[60%]  pl-[30%]  justify-around items-center ">
            <a href={e.imageUrl}><button className=" bg-yellow-400 w-14 shadow-md  active:scale-50">view</button></a>
            </div></div></li>
    </ul>
       })}
        </div>
    </div>}
    </>
  ):
  isGetting ? <Loader2 className="animate-spin"></Loader2>:
  <p>No notes are avilable</p>
}

export default  forwardRef(ViewNotesBySubjectAndDepertment)