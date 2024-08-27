import ViewNotesBySubjectAndDepertment from "@/pages/viewNotesBySubjectAndDepertment";
import { useRef, useState } from "react";

const SelectDepertment = () => {
  const [depertment, setdepertment] = useState("BCA");
  const [subject, setsubject] = useState("DSA");
  const subjectRef = useRef("");
  const depertmentRef = useRef("");
  const [isSubmit, setisSubmit] = useState(false);

  const submit = () => {
    subjectRef.current =subject;
    depertmentRef.current =depertment;
    setisSubmit(true); 
  };
   
  const obj={
    BA:[""],
    BSC:[""],
    BCA:["Maths", "Fundamentels","DSA"]
  }

  const slct= function(stream){
           const sub= obj[stream];
           return sub;
  }

  const sub= slct(depertment);
  if (!isSubmit) {
    return (
      <div className="flex h-screen items-center justify-center bg-black p-20 px-12">
      <div className="relative flex h-full w-full flex-col items-center gap-4">
        <h2 className="mt-10 text-3xl font-bold text-white">Campus <span className="text-[#5053E7]">Notes</span></h2>
        <div className="mt-9 flex h-fit w-full flex-col sm:items-center">
          <label className="absolute text-xl font-semibold text-white  ">Depertment:</label>
          <select name="" id=""className=" font-semibold text-white  mt-12 h-12 w-44  rounded-md bg-blue-600 outline-none sm:w-[40%] sm:h-14" value={depertment} onChange={(e)=>{setdepertment(e.target.value)}}>
            <option value="BCA">BCA</option>
            <option value="BA">BA</option>
            <option value="BSC">BSC</option>
          </select>
    
          <label className="mt-12 text-xl font-semibold text-white">Subject:</label>
          <select name="" id="" className="mt-5 h-12  font-semibold text-white  w-44 rounded-md bg-blue-600 outline-none sm:w-[40%] sm:h-14"  value={subject} onChange={(e)=>{setsubject(e.target.value)}}>
           {
            sub.map((e)=>{
             
            return  <option key={e} value={e}>{e}</option>
            })
           }
          </select>
          {
            console.log(subject)
          }
          <label className="mt-12 text-xl font-semibold text-white">Semister:</label>
          <select name="" id="" className="mt-5 h-12 w-44 rounded-md bg-blue-600  font-semibold text-white  outline-none sm:w-[40%] sm:h-14">
            <option value="">1</option>
          </select>
        </div>
    
        <button className="text-2xls mt-6 rounded-md bg-green-400 px-[50%] sm:px-[30%] py-3 text-xl font-semibold text-white active:bg-green-500" onClick={submit}>View</button>
      </div>
    </div>
    
    );
  } else {
  
    return <ViewNotesBySubjectAndDepertment ref={{subjectRef,depertmentRef}}/>;
  }
};

export default SelectDepertment;
