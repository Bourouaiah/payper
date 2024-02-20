import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <section>
      <div>
        <h2 className="text-main-black text-3xl text-center font-semibold">
          Welcome Back
        </h2>
        <div className="flex justify-center gap-[5px] text-sm mt-[10px]">
          <p className="text-second-gray">New to Payper?</p>
          <Link to='/register' className="text-forest-green underline font-semibold">Sign up</Link>
        </div>
      </div>
      <form className="w-[50%] mx-auto mt-[50px]" action="">
        <div className="flex flex-col gap-[8px]">
          <label className="text-second-gray text-sm" htmlFor="user-email">Your email adress</label>
          <input className="rounded-[5px] p-[8px] border-2 border-third-gray hover:border-second-gray duration-500 ease-in-out outline-forest-green" type="email" name="user-email" id="" />
        </div>
        <div className="flex flex-col gap-[8px] my-[30px]">
          <label className="text-second-gray text-sm" htmlFor="user-password">Your password</label>
          <input className="rounded-[5px] p-[8px] border-2 border-third-gray hover:border-second-gray duration-500 ease-in-out outline-forest-green" type="email" name="user-password" id="" />
        </div>
        <button className="w-full p-[8px] text-forest-green text-[15px] font-semibold bg-bright-green rounded-2xl hover:bg-main-green duration-150 ease-in-out">Log in</button>
      </form>
    </section>
  );
}

export default Login;
