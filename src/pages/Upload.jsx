import axios from "axios"
import { Loader2 } from "lucide-react"
import { useState } from "react"


const Upload = () => {
    const [NotesName, setNotesName] = useState("")
    const [subject, setsubject] = useState("DSA")
    const [depertment, setdepertment] = useState("BCA")
    const [notesImg, setNotesImg] = useState(null)
    const [isUploading, setisUploading] = useState(false)
    const [error, seterror] = useState(null)
    const [uploadMessage, setuploadMessage] = useState(null)
    const upload= async (e)=>{
              e.preventDefault()
              setisUploading(true)
              try {
                const formData= new FormData()
                formData.append("name",NotesName)
                formData.append("depertment",depertment)
                formData.append("subject",subject)
                formData.append("notesImg",notesImg)
                const response= await axios.post('/users/upload-notes',formData)
                setuploadMessage(response.data.message)
              } catch (error) {
                setuploadMessage(error.response.data.message)
                seterror(error.response.data.message)
                console.log(error);
              }finally{
                setNotesImg(null)
                setNotesName("")
                setsubject("")
                setdepertment("")
                setisUploading(false)
              }
              
    }




  return (
    <div className=" w-screen h-screen bg-red-50 flex justify-center items-center bg-white">
        <div className=" w-[80%] sm:w-2/4 sm:h-3/4 rounded-lg  bg-white p-16 shadow-2xl ">
            <form className=" h-[60%] mt-20" onSubmit={upload}>
                <label><h1 className=" text-black font-semibold text-lg">Notes Name:</h1></label>
                <input type="text" value={NotesName} required={true} onChange={(e)=>{setNotesName(e.target.value)}} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-2"/> 

                <label><h1 className=" text-black font-semibold text-lg mt-4">Depertment:</h1></label>
                <select className=" w-40 mt-2 rounded-md p-2 h-12 bg-red-700 text-white font-semibold outline-red-500" value={depertment} required={true} onChange={(e)=>{setdepertment(e.target.value)}}>
                    <option value="BCA" className=" bg-gray-700 hover:bg-gray-600">BCA</option>
                    <option value="BA" className=" bg-gray-700 hover:bg-gray-600">BA</option>
                    <option value="BSC" className=" bg-gray-700 hover:bg-gray-600">BSC</option>
                </select>

                <label><h1 className=" text-black font-semibold text-lg mt-4">Subject:</h1></label>
                <select className=" mt-1 w-40 mt-2 rounded-md p-2 h-12 bg-blue-700 text-white font-semibold outline-blue-800"  value={subject} required={true} onChange={(e)=>{setsubject(e.target.value)}}>
                    <option value="DSA" className=" bg-gray-700 hover:bg-gray-600 ">DSA</option>
                    <option value="Maths" className=" bg-gray-700 hover:bg-gray-600 ">Maths</option>
                    <option value="Fundamentels" className=" bg-gray-700 hover:bg-gray-600 ">Fundamentels</option>
                </select>
                <label> <h1 className="text-black font-semibold text-lg mt-4">Select Image</h1></label>
                <input type="file" name="notesImg" accept=".png,.jpg" capture required={true}  onChange={(e)=>{setNotesImg(e.target.files[0])}} />
<br />
                <button disabled={isUploading}  className="border-1  rounded-md h-12 w-24 mt-6 shadow-lg text-white font-semibold  bg-green-500 p-1">Upload</button>
                { isUploading &&   <p><Loader2 className=" animate-spin"></Loader2></p> } <p>{uploadMessage}</p>
            </form>
        </div>
    </div>
  )
}

export default Upload 