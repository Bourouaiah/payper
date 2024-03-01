import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoLogOut, IoNotifications } from "react-icons/io5";

function MainNavbar() {
  return (
    <nav className="ml-[20%] nav-shadow flex justify-between items-center p-[20px]">
      <div>
        <h2 className="text-xl font-semibold text-main-black">Hello Abdelaziz</h2>
        <p className="text-sm text-main-gray">See what's happening today </p>
      </div>
      <div className="flex items-center gap-[20px] text-second-gray text-2xl">
        <div>
          <IoNotifications />
        </div>
        <div>
          <FaUserCircle />
        </div>
        <div>
          <IoLogOut />
        </div>
      </div>
    </nav>
  );
}

export default MainNavbar;
