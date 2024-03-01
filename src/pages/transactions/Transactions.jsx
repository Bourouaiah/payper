import React from "react";
import chipCard from "../../assets/overview/chip-card.png";
import chipCardBlack from "../../assets/overview/chip-card-black.png";
import algeriePost from "../../assets/overview/algerie-poste.svg";

import { NavLink, Outlet } from "react-router-dom";

function Transactions() {
  const activeStyles = {
    borderBottom: "3px solid #890720",
    color: '#890720',
    fontWeight: 'bold'
  };

  return (
    <section className="ml-[20%] p-[30px]">
      <div>
        <h2 className="text-main-black font-semibold text-2xl mb-[15px]">
          My Cards
        </h2>
        <div className="grid grid-cols-2 gap-[20px]">
          <div className="bg-main-red py-[15px] px-[30px] rounded-xl">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-white">Balance</h3>
                <p className="text-main-gray">DA 12,000</p>
              </div>
              <div>
                <img src={chipCard} alt="chip-card" />
              </div>
            </div>
            <div className="flex justify-between mt-[20px]">
              <div>
                <h3 className="font-bold text-white">Card Holder</h3>
                <p className="text-main-gray">Abdelaziz Bourouaiah</p>
              </div>
              <div>
                <h3 className="font-bold text-white">Expired Date</h3>
                <p className="text-right text-main-gray">03/24</p>
              </div>
            </div>
            <div className="mt-[40px] flex items-center justify-between">
              <p className="text-main-gray">6280 7030 0775 4507</p>
              <div>
                <img
                  className="w-[30px]"
                  src={algeriePost}
                  alt="algerie-post-logo"
                />
              </div>
            </div>
          </div>
          <div className="bg-fourth-red py-[15px] px-[30px] rounded-xl">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-main-black">Balance</h3>
                <p className="text-second-gray">DA 12,000</p>
              </div>
              <div>
                <img src={chipCardBlack} alt="chip-card" />
              </div>
            </div>
            <div className="flex justify-between mt-[20px]">
              <div>
                <h3 className="font-bold text-main-black">Card Holder</h3>
                <p className="text-second-gray">Abdelaziz Bourouaiah</p>
              </div>
              <div>
                <h3 className="font-bold text-main-black">Expired Date</h3>
                <p className="text-right text-second-gray">03/24</p>
              </div>
            </div>
            <div className="mt-[40px] flex items-center justify-between">
              <p className="text-second-gray">00799999002893983857</p>
              <div>
                <img
                  className="w-[30px]"
                  src={algeriePost}
                  alt="algerie-post-logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[40px]">
        <h2 className="text-main-black font-semibold text-2xl mb-[15px]">
          Recent Transactions
        </h2>
        <ul className="flex items-center gap-[40px] mb-[20px]">
          <li>
            <NavLink
            className="pb-[5px] text-main-gray"
              style={({ isActive }) => (isActive ? activeStyles : null)}
              to="/payper/home/transactions"
            >
              All Transactions
            </NavLink>
          </li>
          <li>
            <NavLink
            className="pb-[5px] text-main-gray"
              style={({ isActive }) => (isActive ? activeStyles : null)}
              to="/payper/home/transactions/income"
            >
              Income
            </NavLink>
          </li>
          <li>
            <NavLink
            className="pb-[5px] text-main-gray"
              style={({ isActive }) => (isActive ? activeStyles : null)}
              to="/payper/home/transactions/expense"
            >
              Expense
            </NavLink>
          </li>
        </ul>
        <div>
          <Outlet />
        </div>
      </div>
    </section>
  );
}

export default Transactions;
