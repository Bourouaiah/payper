import React from "react";
import chipCard from "../../assets/overview/chip-card.png";
import algeriePost from "../../assets/overview/algerie-poste.svg";
import balance from "../../assets/accounts/balance.png";
import income from "../../assets/accounts/income.png";
import expense from "../../assets/accounts/expense.png";
import transaction from "../../assets/overview/transaction.png";

function Accounts() {
  return (
    <section className="ml-[20%] p-[30px]">
      <div className="flex gap-[20px]">
        <div className="bg-fourth-red flex items-center justify-center gap-[20px] p-[20px] rounded-lg">
          <div className="bg-third-gray w-[50px] h-[50px] p-[5px] rounded-full">
            <img className="w-full" src={balance} alt="balance" />
          </div>
          <div className="flex flex-col gap-[2px]">
            <h4 className="text-main-gray">My Balance</h4>
            <p className="text-main-black font-semibold text-2xl">$12,750</p>
          </div>
        </div>
        <div className="bg-fourth-red flex items-center justify-center gap-[20px] p-[20px] rounded-lg">
          <div className="bg-third-gray w-[50px] h-[50px] p-[5px] rounded-full">
            <img className="w-full" src={income} alt="income" />
          </div>
          <div className="flex flex-col gap-[2px]">
            <h4 className="text-main-gray">Income</h4>
            <p className="text-main-black font-semibold text-2xl">$5,600</p>
          </div>
        </div>
        <div className="bg-fourth-red flex items-center justify-center gap-[20px] p-[20px] rounded-lg">
          <div className="bg-third-gray w-[50px] h-[50px] p-[5px] rounded-full">
            <img className="w-full" src={expense} alt="expense" />
          </div>
          <div className="flex flex-col gap-[2px]">
            <h4 className="text-main-gray">Expense</h4>
            <p className="text-main-black font-semibold text-2xl">$3,460</p>
          </div>
        </div>
      </div>
      <div className="flex items-baseline gap-[20px]">
        <div className="mt-[40px] w-[70%]">
          <h2 className="text-main-black font-semibold text-2xl mb-[15px]">
            Last Transaction
          </h2>
          <div className="bg-fourth-red p-[30px] rounded-xl flex flex-col gap-[40px]">
            <div className="flex items-center justify-between">
              <div className="w-[60px] h-[60px] bg-third-gray p-[10px] rounded-full">
                <img src={transaction} alt="transaction" />
              </div>
              <div>
                <h2 className="text-main-black text-xl font-semibold">
                  Mobile Service
                </h2>
                <p className="text-main-gray">25 Jan 2021</p>
              </div>
              <p className="text-main-gray">Shopping</p>
              <p className="text-main-gray">1234 ****</p>
              <p className="text-main-gray">Pending</p>
              <p className="text-red-600 font-semibold">-$150</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="w-[60px] h-[60px] bg-third-gray p-[10px] rounded-full">
                <img src={transaction} alt="transaction" />
              </div>
              <div>
                <h2 className="text-main-black text-xl font-semibold">
                  Mobile Service
                </h2>
                <p className="text-main-gray">25 Jan 2021</p>
              </div>
              <p className="text-main-gray">Shopping</p>
              <p className="text-main-gray">1234 ****</p>
              <p className="text-main-gray">Pending</p>
              <p className="text-red-600 font-semibold">-$150</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="w-[60px] h-[60px] bg-third-gray p-[10px] rounded-full">
                <img src={transaction} alt="transaction" />
              </div>
              <div>
                <h2 className="text-main-black text-xl font-semibold">
                  Mobile Service
                </h2>
                <p className="text-main-gray">25 Jan 2021</p>
              </div>
              <p className="text-main-gray">Shopping</p>
              <p className="text-main-gray">1234 ****</p>
              <p className="text-main-gray">Pending</p>
              <p className="text-red-600 font-semibold">-$150</p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-main-black font-semibold text-2xl mb-[15px]">
            My Cards
          </h2>
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
        </div>
      </div>
    </section>
  );
}

export default Accounts;
