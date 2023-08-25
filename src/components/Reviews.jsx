import { reviews } from "../assets/constant"
import Review from "./Review"

export default function Reviews() {
  
  return (
    
    <div className="bg-white bg-opacity-50 py-10 mt-24">
        <div className="container mx-auto text-center">
            <h2 className="font-bold text-5xl mb-10 ">
                What our <span className="text-orange-600">Customers</span> Say
            </h2>
        <p className=" text-xl text-gray-500 max-w-lg mx-auto">Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>
        <div className="flex gap-16 justify-evenly mt-24 max-md:flex-wrap">
          
          {reviews.map(e=>{ return <Review key={e.imgURL} url = {e.imgURL}  rating= {e.rating}  feedback = {e.feedback}  customerName= {e.customerName} />})}
        </div>
        </div>
    </div>
  )
}
