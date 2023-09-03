import { useState } from "react";
import { Link } from "react-router-dom";

const Counter = () => {
    const [counter, setCounter] = useState(0)

  return (
    <>
      <div className="h-screen w-full flex flex-col gap-5 items-center justify-center bg-gradient-to-r from-[#feada6] to-[#f5efef]">
      <Link className="bg-orange-500 hover:bg-orange-600 text-center px-5 py-2 font-semibold text-white text-lg rounded-md" to='/'>Home</Link>
        <div className="w-80 shadow-xl rounded-lg border-black flex flex-col items-center justify-center mb-10 py-10 px-5 bg-white">
            <h1 className="text-8xl font-semibold">{counter}</h1>
            <div className="flex items-center gap-5 my-5">
                <button className="bg-sky-500 hover:bg-sky-600 text-center px-6 py-1 font-bold text-white text-2xl rounded-md" onClick={() => setCounter(counter - 1)}>-</button>
                <button className="bg-sky-500 hover:bg-sky-600 text-center px-5 py-2 font-semibold text-white text-md rounded-md" onClick={() => setCounter(0)}>Reset</button>
                <button className="bg-sky-500 hover:bg-sky-600 text-center px-5 py-1 font-bold text-white text-2xl rounded-md" onClick={() => setCounter(counter + 1)}>+</button>
            </div>
        </div>
      </div>
    </>
  );
};

export default Counter;
