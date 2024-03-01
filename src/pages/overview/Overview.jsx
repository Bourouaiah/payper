import React from "react";
import chipCard from "../../assets/overview/chip-card.png";
import chipCardBlack from "../../assets/overview/chip-card-black.png";
import algeriePost from "../../assets/overview/algerie-poste.svg";

import transaction from "../../assets/overview/transaction.png";

import { FaMoneyBillTransfer, FaWallet, FaPaperPlane } from "react-icons/fa6";

function Overview() {
  return (
    <section className="ml-[20%] p-[30px] bg-special-one">
      <div>
        <h2 className="text-second-blue font-semibold text-2xl mb-[15px]">
          My Cards
        </h2>
        <div className="grid grid-cols-2 gap-[20px]">
          <div className="bg-[#4C49ED] py-[15px] px-[30px] rounded-xl">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-white">Balance</h3>
                <p className="text-white">DA 12,000</p>
              </div>
              <div>
                <img src={chipCard} alt="chip-card" />
              </div>
            </div>
            <div className="flex justify-between mt-[20px]">
              <div>
                <h3 className="font-bold text-special-white">Card Holder</h3>
                <p className="text-white">Abdelaziz Bourouaiah</p>
              </div>
              <div>
                <h3 className="font-bold text-special-white">Expired Date</h3>
                <p className="text-right text-white">03/24</p>
              </div>
            </div>
            <div className="mt-[40px] flex items-center justify-between">
              <p className="text-white">6280 7030 0775 4507</p>
              <div>
                <img
                  className="w-[30px]"
                  src={algeriePost}
                  alt="algerie-post-logo"
                />
              </div>
            </div>
          </div>
          <div className="bg-white py-[15px] px-[30px] rounded-xl">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-third-blue">Balance</h3>
                <p className="text-second-blue">DA 12,000</p>
              </div>
              <div>
                <img src={chipCardBlack} alt="chip-card" />
              </div>
            </div>
            <div className="flex justify-between mt-[20px]">
              <div>
                <h3 className="font-bold text-third-blue">Card Holder</h3>
                <p className="text-second-blue">Abdelaziz Bourouaiah</p>
              </div>
              <div>
                <h3 className="font-bold text-third-blue">Expired Date</h3>
                <p className="text-right text-second-blue">03/24</p>
              </div>
            </div>
            <div className="mt-[40px] flex items-center justify-between">
              <p className="text-second-blue">00799999002893983857</p>
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
      <div className="my-[50px]">
        <h2 className="text-second-blue font-semibold text-2xl mb-[15px]">
          Recent Transactions
        </h2>
        <div className="w-[50%] flex flex-col gap-[30px] items-center bg-fourth-red p-[30px] rounded-xl">
          <div className="flex items-center gap-[40px]">
            <div className="w-[60px] h-[60px] bg-third-gray p-[10px] rounded-full">
              <img src={transaction} alt="transaction" />
            </div>
            <div>
              <h2 className="text-special-black font-semibold">
                Deposit from my Card
              </h2>
              <p className="text-third-blue">28 January 2021</p>
            </div>
            <div>
              <p className="text-special-red font-semibold w-[80px] overflow-hidden">
                -$850
              </p>
            </div>
          </div>
          <div className="flex items-center gap-[40px]">
            <div className="w-[60px] h-[60px] bg-third-gray p-[10px] rounded-full">
              <img src={transaction} alt="transaction" />
            </div>
            <div>
              <h2 className="text-special-black font-semibold">
                Deposit from my Card
              </h2>
              <p className="text-third-blue">28 January 2021</p>
            </div>
            <div>
              <p className="text-special-green font-semibold w-[80px] overflow-hidden">
                +$2,500
              </p>
            </div>
          </div>
          <div className="flex items-center gap-[40px]">
            <div className="w-[60px] h-[60px] bg-third-gray p-[10px] rounded-full">
              <img src={transaction} alt="transaction" />
            </div>
            <div>
              <h2 className="text-special-black font-semibold">
                Deposit from my Card
              </h2>
              <p className="text-third-blue">28 January 2021</p>
            </div>
            <div>
              <p className="text-special-green font-semibold w-[80px] overflow-hidden">
                +$5,400
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[50px]">
        <h2 className="text-second-blue font-semibold text-2xl mb-[15px]">
          Quick Actions
        </h2>
        <div className="flex gap-[20px] text-second-blue">
          <div className="w-[200px] bg-white p-[20px] flex flex-col gap-[15px] rounded-xl font-semibold">
            <FaPaperPlane className="text-xl" />
            <h2>Send Money</h2>
          </div>
          <div className="w-[200px] bg-white p-[20px] flex flex-col gap-[15px] rounded-xl font-semibold">
            <FaWallet className="text-xl" />
            <h2>Wallet Details</h2>
          </div>
          <div className="w-[200px] bg-white p-[20px] flex flex-col gap-[15px] rounded-xl font-semibold">
            <FaMoneyBillTransfer className="text-xl" />
            <h2>All transfers</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Overview;
