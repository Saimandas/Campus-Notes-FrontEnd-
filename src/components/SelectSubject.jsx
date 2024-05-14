

const SelectSubject = () => {
  return (
    <>
    <div className=" flex justify-center items-center w-full h-full ">
       <div className=" bg-red-400 h-3/4 w-2/4 shadow-lg rounded-lg flex flex-col justify-center items-center ">
        <button className=" h-1/4 w-[35%] rounded-xl shadow-xl mt-3 bg-blue-600 text-lg font-semibold text-white">Fundamentels</button>
        <button className=" h-1/4 w-[35%] rounded-xl shadow-xl mt-3 bg-blue-600 text-lg font-semibold text-white">Data Structure</button>
        <button className=" h-1/4 w-[35%] rounded-xl shadow-xl mt-3 bg-blue-600 textlg font-semibold text-white">Maths</button>
       </div>
    </div>
    </>
  )
}

export default SelectSubject