import React from "react";
import logo from "../../assets/payper.png";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaMoneyBill,
  FaCreditCard,
  FaCog,
  FaUserAlt,
} from "react-icons/fa";

function MainSidebar() {
  const activeStyles = {
    color: "#2D60FF",
  };
  return (
    <div className="fixed mainsidebar-shadow p-[30px] left-0 top-0 h-full w-[20%]">
      <div className="flex items-center gap-[10px]">
        <img className="w-[30px]" src={logo} alt="logo" />
        <h3 className="text-main-red font-bold">PayPer</h3>
      </div>
      <ul className="flex flex-col mt-[40px] gap-[20px]">
        <li className="hover:bg-fourth-red font-semibold text-main-gray hover:text-second-red text-lg rounded-lg">
          <NavLink
            style={({ isActive }) => (isActive ? activeStyles : null)}
            to="."
            className="flex items-center gap-[8px] px-[10px] py-[8px] rounded-lg"
          >
            <FaHome />
            <p>Overview</p>
          </NavLink>
        </li>
        <li className="hover:bg-fourth-red text-main-gray hover:text-second-red font-semibold text-lg rounded-lg">
          <NavLink
            style={({ isActive }) => (isActive ? activeStyles : null)}
            to="/payper/home/transactions"
            className="flex items-center gap-[8px] px-[10px] py-[8px] rounded-lg"
          >
            <FaMoneyBill />
            <p>Transactions</p>
          </NavLink>
        </li>
        <li className="hover:bg-fourth-red text-main-gray hover:text-second-red font-semibold text-lg rounded-lg">
          <NavLink
          to="accounts"
            className="flex items-center gap-[8px] px-[10px] py-[8px] rounded-lg"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            <FaUserAlt />
            <p>Accounts</p>
          </NavLink>
        </li>
        <li className="hover:bg-fourth-red text-main-gray hover:text-second-red font-semibold text-lg rounded-lg">
          <NavLink
          to="card"
            className="flex items-center gap-[8px] px-[10px] py-[8px] rounded-lg"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            <FaCreditCard />
            <p>My Card</p>
          </NavLink>
        </li>
        <li className="hover:bg-fourth-red text-main-gray hover:text-second-red font-semibold text-lg rounded-lg">
          <NavLink
          to="settings"
            className="flex items-center gap-[8px] px-[10px] py-[8px] rounded-lg"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            <FaCog />
            <p>Settings</p>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default MainSidebar;
