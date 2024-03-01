import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaGoogle,
  FaApple,
  FaEye,
  FaEyeSlash,
  FaPhoneAlt,
} from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import { auth } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { provider } from "../../firebase";

function Register() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {})
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      toast.error("Please enter your data!");
    } else {
      setLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          setLoading(false);
          navigate("/payper/user-collect-data");
        })
        .catch((error) => {
          setLoading(false);
          const errorMessage = error.message;
          toast.error(errorMessage);
        });
    }
  };

  return (
    <section className="md:w-[70%] lg:w-[50%] md:mx-auto">
      <div>
        <h2 className="text-second-blue text-2xl md:text-3xl text-center font-semibold">
          Create your Payper account
        </h2>
        <div className="flex justify-center gap-[5px] text-sm mt-[10px]">
          <p className="text-second-gray">Already have an account?</p>
          <Link
            to="/payper/login"
            className="text-second-blue underline font-semibold"
          >
            Log in
          </Link>
        </div>
      </div>
      <form className="my-[50px]" action="">
        <div className="flex flex-col">
          <label className="text-second-gray text-sm" htmlFor="user-email">
            First, enter your email address
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="mt-[10px] rounded-[5px] p-[8px] border-2 border-third-gray hover:border-second-gray duration-500 ease-in-out outline-main-blue"
            type="email"
            name="user-email"
            id="user-email"
          />
        </div>
        <div className="flex flex-col gap-[8px] my-[30px]">
          <label className="text-second-gray text-sm" htmlFor="user-password">
            Your password
          </label>
          <div className="flex justify-between items-center rounded-md p-[8px] border-2 border-third-gray hover:border-second-gray duration-500 ease-in-out outline-main-blue">
            <input
              className="outline-none border-none flex-grow"
              onChange={(e) => setPassword(e.target.value)}
              type={`${showPassword ? "text" : "password"}`}
              name="user-password"
              id="user-password"
            />
            <div
              onClick={handleTogglePassword}
              className="text-second-gray cursor-pointer"
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </div>
          </div>
        </div>
        <button
          onClick={handleRegister}
          className="w-full p-[10px] text-main-black text-white text-[15px] font-semibold bg-second-blue rounded-3xl hover:bg-main-blue duration-150 ease-in-out"
          disabled={loading}
        >
          {loading ? (
            <div className="flex items-center justify-center">
              <div className="mr-2">Registering...</div>
              <div className="loader"></div>
            </div>
          ) : (
            "Register"
          )}
        </button>
      </form>
      <div className="my-[20px]">
        <p className="mb-[20px] text-sm text-second-gray">Or log in with</p>
        <ul className="flex gap-[20px] text-2xl">
          <li className="w-[33%]">
            <button
              onClick={handleGoogleSignIn}
              className="w-[100%] border-2 border-second-blue text-second-blue hover:text-white hover:bg-main-blue hover:border-white duration-300 flex justify-center py-[10px] rounded-lg"
            >
              <FaGoogle />
            </button>
          </li>
          <li className="w-[33%]">
            <button
              onClick={() => {
                navigate("/payper/phone-login");
              }}
              className="w-[100%] border-2 border-second-blue text-second-blue hover:text-white hover:bg-main-blue hover:border-white duration-300 flex justify-center py-[10px] rounded-lg"
            >
              <FaPhoneAlt />
            </button>
          </li>
          <li className="w-[33%]">
            <button className="w-[100%] border-2 border-second-blue text-second-blue hover:text-white hover:bg-main-blue hover:border-white duration-300 flex justify-center py-[10px] rounded-lg">
              <FaApple />
            </button>
          </li>
        </ul>
      </div>
      <div>
        <p className="text-sm text-second-gray text-center mt-[40px]">
          By registering, you accept our{" "}
          <Link className="text-main-black underline font-semibold">
            Terms of use
          </Link>{" "}
          and{" "}
          <Link className="text-main-black underline font-semibold">
            Privacy Policy
          </Link>
        </p>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </section>
  );
}

export default Register;
