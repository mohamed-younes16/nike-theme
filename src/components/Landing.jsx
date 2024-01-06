import * as allimages from "../assets/images/index.js";
import * as allicons from "../assets/icons/index.js";
import { useRef, useState, useEffect } from "react";

export default function Landing() {
  const [range, setrange] = useState("");
  const innerwrapper = useRef();
  const [wrapperwidth, setwrapper] = useState(0);
  const setactive = (e) => {
    document
      .querySelectorAll(".choice")
      .forEach((e) => e.classList.remove("border-orange-800"));

    e.currentTarget.classList.add("border-orange-800");
  };
  useEffect(() => {
    function setwrapperwidth() {
      innerwrapper.current
        ? setwrapper(innerwrapper.current.getBoundingClientRect().width)
        : "";
    }
    setwrapperwidth();
    document.body.onresize = () => {
      setwrapperwidth();
    };

    innerwrapper.current.style.translate = `-${range * wrapperwidth}px 0`;
  });

  return (
    <div>
      <div
        className="container mx-auto xl:flex justify-center gap-3 mb-20 max-md:mt-16 "
        id="home"
      >
        <div className="intro xl:w-2/5 flex flex-col justify-center  min-h-screen p-3">
          <p className=" text-orange-500 text-2xl font-normal mb-4">
            Our Summer collections
          </p>

          <h1 className=" max-md:text-[4rem] text-[5.5rem] font-bold font-palanquin">
            <span className="relative z-40 xl:whitespace-nowrap pr-6  ">
              The New Arrival{" "}
            </span>
            <br />
            <span className="text-orange-700">Nike</span> Shoes
          </h1>

          <p className=" leading-9 text-2xl text-gray-500">
            Discover stylish Nike arrivals, quality <br /> comfort, and
            innovation for your active life.
          </p>

          <button
            className="group/shop mb-10 duration-300  hover:shadow-orange-700 mt-24 bg-orange-700  
                py-4 px-3 text-white shadow-lg shadow-orange-900  
                leading-none hover:text-black hover:translate-x-1 hover:translate-y-1 transition rounded-full text-xl w-fit flex gap-2 items-center "
          >
            Shop Now
            <img
              className=" transition group-hover/shop:translate-x-2"
              src={allicons.arrowRight}
              alt=""
              height={20}
              width={20}
            />
          </button>

          <div className="flex font-palanquin gap-16">
            <div>
              <p className="font-bold text-4xl font-palanquin">1k+</p>
              <p>Brands</p>
            </div>
            <div>
              <p className="font-bold text-4xl font-palanquin">500</p>
              <p>Shops</p>
            </div>
            <div>
              <p className="font-bold text-4xl font-palanquin">250k+</p>
              <p>Customers</p>
            </div>
          </div>
        </div>

        <div className="shoes  min-h-screen xl:w-2/5 flex flex-col justify-center relative ">
          <div className="wrapper overflow-hidden mx-auto">
            <div className="inner-wrapper flex" ref={innerwrapper}>
              <img src={allimages.bigShoe1} alt="shoe" className="w-full " />
              <img src={allimages.bigShoe2} alt="shoe" className="w-full  " />
              <img src={allimages.bigShoe3} alt="shoe" className="w-full" />
            </div>
          </div>
          <div className="wrapper-toggle flex justify-center gap-5 absolute bottom-5 md:bottom-[-5%]">
            <div
              className="choice border-4 border-orange-800"
              data-range="0"
              onClick={(e) => {
                setactive(e);
                setrange(e.currentTarget.dataset.range);
              }}
            >
              <img src={allimages.bigShoe1} className="h-4/5" alt="shoe" />
            </div>

            <div
              className="choice  border-4"
              data-range="1"
              onClick={(e) => {
                setactive(e);
                setrange(e.currentTarget.dataset.range);
              }}
            >
              <img src={allimages.bigShoe2} className="h-4/5" alt="shoe" />
            </div>

            <div
              className="choice  border-4"
              data-range="2"
              onClick={(e) => {
                setactive(e);
                setrange(e.currentTarget.dataset.range);
              }}
            >
              <img src={allimages.bigShoe3} className="h-4/5 " alt="shoe" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
