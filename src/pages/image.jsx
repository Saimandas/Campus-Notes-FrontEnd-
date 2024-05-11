import ImageDisplay from "@/components/imageDisplay"
import { useParams } from "react-router-dom"


const Image = () => {
    const params= useParams()
    const {img}= params
  return (
    <>
    <ImageDisplay imgLink={img}/>
    </>
  )
}

export default Image