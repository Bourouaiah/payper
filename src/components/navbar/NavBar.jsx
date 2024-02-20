import React from "react";
import logo from "../../assets/logo.png";

import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

function NavBar({ isSideBarShown, setIsSideBarShown }) {
  return (
    <nav className="fixed z-20 bg-white w-full flex justify-between nav-shadow items-center px-[32px] xl:px-[130px] py-[30px]">
      <div className="flex items-center space-x-7">
        <Link to='/'>
          <img className="w-[100px]" src={logo} alt="logo" />
        </Link>
        <button className="hidden lg:block text-forest-green text-[15px] font-semibold bg-bright-green px-[10px] py-[5px] rounded-2xl hover:bg-main-green duration-150 ease-in-out">
          Personal
        </button>
      </div>
      <ul className="hidden lg:flex space-x-2 text-forest-green font-semibold">
        <li>
          <a
            className="hover:bg-main-gray p-[6px] rounded-2xl duration-150 ease-in-out"
            href=""
          >
            Pricing
          </a>
        </li>
        <li>
          <a
            className="hover:bg-main-gray p-[6px] rounded-2xl duration-150 ease-in-out"
            href=""
          >
            Help
          </a>
        </li>
        <li>
          <Link
            className="hover:bg-main-gray p-[6px] rounded-2xl duration-150 ease-in-out"
            to="/login"
          >
            Log in
          </Link>
        </li>
        <li>
          <Link
            className="text-forest-green text-[15px] font-semibold bg-bright-green px-[10px] py-[5px] rounded-2xl hover:bg-main-green duration-150 ease-in-out"
            to="/register"
          >
            Register
          </Link>
        </li>
      </ul>
      <div
        onClick={() => setIsSideBarShown((prevVal) => !prevVal)}
        className="bg-main-gray w-[40px] h-[40px] lg:hidden flex justify-center items-center rounded-full cursor-pointer"
      >
        {!isSideBarShown ? (
          <FaBars className="text-xl text-forest-green" />
        ) : (
          <FaTimes className="text-xl text-forest-green" />
        )}
      </div>
    </nav>
  );
}

export default NavBar;
