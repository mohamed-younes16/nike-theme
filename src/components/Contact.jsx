
export default function Contact() {
  return (
    <div className="container mx-auto ">
        <div className="flex justify-between items-center">
        <h3 className="font-bold text-5xl max-w-md leading-[70px] font-palanquin">Sign Up from <span className="text-orange-600">Updates</span> & Newsletter</h3>
        <form action="" className="border w-2/5 border-gray-400 justify-between rounded-full flex max-h-20 p-5 items-center">
            
            <input type="email" name="email" id="email" className="px-3 py-2 w-2/3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50  outline-none focus:border-sky-500 transition duration-300 focus:ring-sky-500 rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 " />
            <button className='group/shop mb-10 duration-300 hover:translate-y-1 hover:shadow-orange-700 mt-10 bg-orange-700  
                py-4 px-4 text-white shadow-lg shadow-orange-900  
                leading-none hover:text-black transition rounded-full text-xl w-fit flex gap-2 items-center '>
                Sign Up

                </button>

        </form>
        </div>
    </div>
  )
}
