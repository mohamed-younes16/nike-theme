import { offer } from "../assets/images";

export default function Offer() {
  return (
    <div className="container mx-auto mt-10">
      <div className="flex gap-6 max-lg:flex-col items-center">
        <div className="img-wrapper rounded-2xl  flex-1  max-lg:mb-10">
          <img className=" rounded-2xl " src={offer} alt="" />
        </div>
        <div className="offer-info flex-1 flex flex-col justify-center">
          <p className="font-bold font-palanquin text-5xl mb-7">
            <span className="text-orange-600">Special</span> Offer
          </p>
          <div className="text-gray-500 text-xl md:w-3/5">
            Embark on a shopping journey that redefines your experience with
            unbeatable deals. From premier selections to incredible savings, we
            offer unparalleled value that sets us apart.
            <p className="my-6">
              Navigate a realm of possibilities designed to fulfill your unique
              desires, surpassing the loftiest expectations. Your journey with
              us is nothing short of exceptional.
            </p>
          </div>
          <div className="flex gap-10">
            <button
              className="group/shop mb-10 duration-300 hover:translate-y-1  hover:shadow-orange-700 mt-10 bg-orange-700  
                py-4 px-4 text-white shadow-lg shadow-orange-900  
                leading-none hover:text-black transition rounded-full text-xl w-fit flex gap-2 items-center "
            >
              View Details
            </button>
            <button
              className="group/shop mb-10 duration-300 hover:translate-y-1 hover:shadow-gray-950 mt-10 bg-white  
                py-4 px-4  shadow-lg shadow-gray-600  
                leading-none hover:text-orange-700 hover:bg-gray-600 transition rounded-full text-xl w-fit flex gap-2 items-center "
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
