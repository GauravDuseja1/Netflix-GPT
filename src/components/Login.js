import React, { useState } from "react";
import Header from "./Header";
import background from "../assets/background.jpg";

const Login = () => {
  const [isSigninForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSigninForm);
  };

  return (
    <div className="relative w-full h-screen">
      <Header />
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <img
          src={background}
          alt="background"
          className="object-cover w-full h-full"
        />
      </div>
      <form className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black p-6 md:p-12 rounded-lg text-white w-10/12 md:w-3/12 bg-opacity-90 z-20">
        <h1 className="font-bold text-3xl mb-8 text-center">
          {isSigninForm ? "Sign IN" : "Sign Up"}
        </h1>
        {!isSigninForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="py-2 px-4 mb-4 w-full bg-gray-800 rounded"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="py-2 px-4 mb-4 w-full bg-gray-800 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="py-2 px-4 mb-4 w-full bg-gray-800 rounded"
        />
        <button className="py-3 px-6 bg-red-700 text-white rounded w-full">
          {isSigninForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          cursor-pointer
          className="mt-4 cursor-pointer"
          onClick={toggleSignInForm}
        >
          {isSigninForm
            ? "New to Netflix? Sign Up Now"
            : "Already Registered? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
