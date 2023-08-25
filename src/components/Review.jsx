import { star } from "../assets/icons"

export default function Review({url,feedback,customerName,rating}) {
  return (
    <div className="flex flex-col items-center">
        <div className="w-[120px] rounded-full h-[120px] overflow-hidden ">
            <img src={url} alt="" />
        </div>
        <p className="text-gray-500 text-xl my-6 max-w-md">{feedback}</p>
        <div className="text-gray-500 text-xl flex gap-2"><img src={star} alt="star logo" />({rating})</div>
        <p className=" font-bold text-2xl mt-4 ">{customerName} </p>
    </div>
  )
}
