import {shoe8} from "../assets/images/index.js"
import {arrowRight} from "../assets/icons/index.js"
import Service from "./Service.jsx";
import { services } from "../assets/constant.js";
export default function AboutUs() {
  return (
    <div className="container mx-auto" id="about">
     <div className="quality mt-28  w-full flex max-md:flex-col ">

<div className="info flex  flex-col justify-center  flex-1">
    <h2 className="font-bold font-palanquin text-5xl leading-[55px]">
    We Provide You <span className="text-orange-700">Super</span><br /><span className="text-orange-700">Quality</span>   Shoes
    </h2>
    <p  className="text-xl mt-6 leading-10 text-gray-500 md:w-3/4">
    Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience,
    providing you with unmatched quality, innovation, and a touch of elegance.
    
    <span className="my-4">Our dedication to detail and excellence ensures your satisfaction</span>
    </p>

    <button className='group/shop mb-10 duration-300 hover:translate-x-[2px] hover:translate-y-1 hover:shadow-orange-700 mt-10 bg-orange-700  
py-4 px-3 text-white shadow-lg shadow-orange-800  
leading-none hover:text-black transition rounded-full text-xl w-fit flex gap-2 items-center '>
Shop Now 
<img className=' transition group-hover/shop:translate-x-2' src={arrowRight}
alt="" height={20} width={20} />
</button>

</div>
<div className="flex-1 justify-center flex items-center"><img src={shoe8} className="" alt="" /></div>

</div>

<div className="services flex gap-6 mt-24 max-md:flex-wrap">
{services.map(e=><Service key={e.imgURL} url={e.imgURL} label={e.label} text={e.subtext}   />)}
</div>
    </div>
  )
}
