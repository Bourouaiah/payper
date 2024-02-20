import React from "react";
import landingImg from "../../assets/landing/landing-payment.jpg";

function Landing() {
  return (
    <section className="pt-[70px]">
      <h1 className="md:text-5xl text-4xl uppercase text-forest-green font-bold text-center">
        Save when you send worldwide
      </h1>
      <p className="text-center text-lg text-second-gray my-[30px]">
        Get your money moving internationally. Save up to 5x when you send with
        Payper.
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-[15px]">
        <button className="text-forest-green text-[15px] font-semibold bg-bright-green border border-main-green px-[20px] py-[10px] rounded-3xl hover:bg-main-green duration-150 ease-in-out">
          Send money now
        </button>
        <button className="text-forest-green text-[15px] font-semibold px-[20px] py-[10px] rounded-3xl border border-forest-green hover:border-main-green hover:bg-main-green duration-150 ease-in-out">
          Open an account
        </button>
      </div>
      <div className="flex justify-center mt-[50px]">
        <img className="w-[500px]" src={landingImg} alt="payment" />
      </div>
    </section>
  );
}

export default Landing;
