import React from "react";
import { Link } from "react-router-dom";

function Sidebar({isSideBarShown}) {
  return (
    <section className={`fixed sidebar-shadow bg-white pt-[120px] px-[20px] top-0 ${isSideBarShown ? 'left-0' : 'left-[-100%]'} z-10 h-full w-full duration-1000 ease-in-out`}>
      <button className="block text-forest-green text-[15px] font-semibold bg-bright-green px-[10px] py-[5px] rounded-2xl hover:bg-main-green duration-150 ease-in-out">
        Personal
      </button>
      <ul className="mt-[20px] gap-[10px] flex flex-col text-forest-green font-semibold">
        <li className="flex-grow hover:bg-main-gray p-[10px] rounded-2xl duration-150 ease-in-out">
          <a
            href=""
          >
            Pricing
          </a>
        </li>
        <li className="flex-grow hover:bg-main-gray p-[10px] rounded-2xl duration-150 ease-in-out">
          <a
            href=""
          >
            Help
          </a>
        </li>
      </ul>
      <div className="absolute w-full bottom-0 left-0 flex flex-col gap-[15px] px-[20px] pb-[20px]">
        <Link
          className="flex-grow text-center border border-forest-green hover:bg-main-gray p-[10px] rounded-2xl duration-150 ease-in-out"
          to="/login"
        >
          Log in
        </Link>
        <Link
          className="flex-grow text-center text-forest-green text-[15px] font-semibold bg-bright-green p-[10px] rounded-2xl hover:bg-main-green duration-150 ease-in-out"
          to="/register"
        >
          Register
        </Link>
      </div>
    </section>
  );
}

export default Sidebar;
