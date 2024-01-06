export default function Service({ url, label, text }) {
  return (
    <div className="rounded-3xl  border active:scale-[99%] border-gray-300 bg-white bg-opacity-25 shadow-inner p-10 cursor-pointer hover:translate-x-[2px] transition duration-150">
      <div className="bg-orange-700 w-fit rounded-full p-2">
        {" "}
        <img src={url} alt="feature logo" />
      </div>
      <p className="font-bold text-2xl my-6">{label}</p>
      <p className="text-2xl max-lg:text-xl text-gray-500">{text} </p>
    </div>
  );
}
