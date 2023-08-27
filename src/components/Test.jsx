import { useState } from "react";
import InstagramLogo from "./InstagramLogo";
import SignUp from "./SignUpForm";
import Login from "./LogInForm";

const Test = () => {
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <div className="h-screen w-full flex items-center justify-center bg-gradient-to-r from-[#feada6] to-[#f5efef]">
      <div className="w-80 shadow-xl rounded-lg border-black flex flex-col items-center justify-center gap-5 py-10 px-5 bg-white">
        <InstagramLogo />
        {loggedIn ? <SignUp /> : <Login />}
        {loggedIn ? (
          <button
            onClick={() => setLoggedIn(false)}
            className="w-full bg-sky-500  py-2 rounded font-semibold text-white hover:bg-sky-600"
          >
            Sign Up
          </button>
        ) : (
          <button
            onClick={() => setLoggedIn(true)}
            className="w-full bg-sky-500  py-2 rounded font-semibold text-white hover:bg-sky-600"
          >
            Log In
          </button>
        )}
        {loggedIn ? (
          <p className="text-md">
            Have an account?{" "}
            <span className="text-sky-500 font-semibold cursor-pointer hover:underline">
              Log In
            </span>
          </p>
        ) : (
          <p className="text-md">
            Don't Have an account?{" "}
            <span className="text-sky-500 font-semibold cursor-pointer hover:underline">
              Sign Up
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export default Test;
