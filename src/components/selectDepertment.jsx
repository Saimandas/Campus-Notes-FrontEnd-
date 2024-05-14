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

  if (!isSubmit) {
    return (
      <>
        <div className="flex justify-center space-x-4 w-3/4 h-2/4 flex-col pl-8 sm:pl-2 flex-row sm:items-center">
          <label>
            <h1 className="text-black font-semibold text-lg mt-4">Depertment:</h1>
          </label>
          <select
            className="w-40 mt-2 rounded-md p-2 h-12 bg-red-700 text-white font-semibold outline-red-500"
            value={depertment}
            onChange={(e) => {
              setdepertment(e.target.value);
            }}
          >
            <option value="BCA" className="bg-gray-700 hover:bg-gray-600">
              BCA
            </option>
            <option value="BA" className="bg-gray-700 hover:bg-gray-600">
              BA
            </option>
            <option value="BSC" className="bg-gray-700 hover:bg-gray-600">
              BSC
            </option>
          </select>

          <label>
            <h1 className="text-black font-semibold text-lg mt-4">Subject:</h1>
          </label>
          <select
            className="mt-1 w-40 mt-2 rounded-md p-2 h-12 bg-blue-700 text-white font-semibold outline-blue-800"
            value={subject}
            onChange={(e) => {
              setsubject(e.target.value);
            }}
          >
            <option value="DSA" className="bg-gray-700 hover:bg-gray-600">
              DSA
            </option>
            <option value="Maths" className="bg-gray-700 hover:bg-gray-600">
              Maths
            </option>
            <option value="Fundamentels" className="bg-gray-700 hover:bg-gray-600">
              Fundamentels
            </option>
          </select>

          <button
            className="bg-green-600 w-24 mt-5 py-2 rounded-lg font-semibold font-sans text-white active:bg-green-400 duration-75"
            onClick={submit} 
          >
            View Notes
          </button>
        </div>
      </>
    );
  } else {
  
    return <ViewNotesBySubjectAndDepertment ref={{subjectRef,depertmentRef}}/>;
  }
};

export default SelectDepertment;
