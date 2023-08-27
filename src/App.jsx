import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-gradient-to-r from-[#feada6] to-[#f5efef]">
      <div className="w-80 shadow-xl rounded-lg border-black flex flex-col items-center justify-center gap-5 py-10 px-5 bg-white">
        <h1 className="text-2xl uppercase font-semibold">Projects</h1>
        <Link className="w-full bg-orange-500 hover:bg-orange-600 text-center py-2 font-semibold text-white text-lg rounded-md" to='/instagram'>Instagram Login</Link>
        <Link className="w-full bg-orange-500 hover:bg-orange-600 text-center py-2 font-semibold text-white text-lg rounded-md" to='/counter'>Counter App</Link>
      </div>
    </div>
  );
};

export default App;
