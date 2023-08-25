
import Product from "./Product.jsx";

import { products  } from "../assets/constant.js";


export default function Products() {

return (
    <div>
        <div className="container mx-auto" id="products">

            <h2 className="font-bold text-6xl font-palanquin my-9">
            Our <span className="text-orange-600 my-5">Popular</span> Products
            </h2>
            <p className="text-gray-500 text-xl font-palanquin">Experience top-notch quality and style with our sought-after
            <br /> selections. Discover a world of comfort, design, and value</p>
            <div className=" mt-5 grid products gap-5 mx-auto ">
            {products.map(e=>{
                return <Product  key={e.imgURL} url={e.imgURL} title={e.name}  price={e.price}/>
            })}
            </div>
           

        </div>
    </div>
)
}
