import React from "react";
import image from "../logo.png";
import google from "../google.svg";
import apple from "../apple.svg";

const Login = () => {
  return (
    <div className="flex">
      <div className="flex flex-col h-screen w-3/6 bg-[#5574f2]  login-container max-lg:hidden ">
        <h1 className="m-10">
          <img alt="logo" src={image} className="h-20" />
        </h1>

        <h2 className="mt-60 mx-auto text-7xl font-semibold text-white">
          BASE
        </h2>
      </div>

      <div className="flex flex-col h-screen">
        <h2 className="mt-36 ml-36 text-3xl font-semibold">Sign In</h2>
        <h3 className="ml-36 mt-3">Sign in to your account</h3>
        <div className="ml-36 mt-5">
          <button className="bg-gray-50 text-gray-500 rounded-md p-4  mr-5 ">
            <img className=" inline-block h-5 w-5 mr-3 mb-1" src={google} alt="Google logo" />
            Sign in with google
          </button>
          <button className="bg-gray-50 text-gray-500 rounded-md p-4">
            <img className=" inline-block h-5 w-5 mr-3 mb-1 " src={apple} alt="Apple Logo" />
            Sign in with apple
          </button>
      <form>
      <h3 className="text-lg mb-1">Email address</h3>
          <input
            type="email"
            className="bg-gray-200 p-2 rounded-md  mb-3 md:w-full lg:w-full sm:w-auto"
          />

          <h3 className="text-lg mb-1">Password</h3>
          <input
            type="password"
            className="bg-gray-200 p-2  rounded-md lg:w-full md:w-full mb-3 sm:w-auto"
            
          />

          <span className="text-[#5574f2] cursor-pointer block ">
            Forgot Password?
          </span>
          <button className="w-full bg-[#5574f2] mt-3 p-4 rounded-xl text-lg text-white font-semibold">
            Sign In
          </button>
      </form>
          
        </div>
      </div>
    </div>
  );
};

export default Login;
