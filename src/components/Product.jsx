
import  * as allicons from "../assets/icons/index.js"

export default function Product({title,price,url}) {
  
  return (
    <div className="mx-auto">
      <div className="pr-img mb-6" >
        <img src={url} alt="" />
      </div>
      <div className="flex text-2xl gap-2  text-gray-500 font-normal">
        <img src={allicons.star} alt="" />
        (4.5)
      </div>
      <p className="font-bold text-3xl my-4">{title}</p>
      <p className="font-bold  text-orange-600"> {price}</p>
    </div>
  )
}
