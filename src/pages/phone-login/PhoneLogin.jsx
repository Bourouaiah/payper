import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { auth } from "../../firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function PhoneLogin() {
  const navigate = useNavigate();

  const [phoneNum, setPhoneNum] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [showVerInp, setShowVerInp] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!phoneNum) {
      console.error("Please enter your phone number!");
    } else {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {}
      );
      const appVerifier = window.recaptchaVerifier;
      const formattedPhoneNumber = `+${phoneNum.replace(/[^\d]/g, "")}`;
      signInWithPhoneNumber(auth, formattedPhoneNumber, appVerifier)
        .then((result) => {
          setConfirmationResult(result);
          setShowVerInp(true);
        })
        .catch((err) => {
          toast.error("Unknown error happened, try again later!");
          console.log(err);
        });
    }
  };

  const handleVerifyCode = () => {
    if (!verificationCode) {
      console.error("Please enter the verification code!");
    } else {
      confirmationResult
        .confirm(verificationCode)
        .then(() => {
          navigate("/payper/user-collect-data");
        })
        .catch((err) => {
          toast.error("Invalid verification code, please try again!");
          console.log(err);
        });
    }
  };

  return (
    <section className="md:w-[70%] lg:w-[50%] md:mx-auto">
      <div>
        <h2 className="text-main-black text-2xl md:text-3xl text-center font-semibold">
          Enter your phone number
        </h2>
      </div>
      <form className="mt-[20px]" onSubmit={handleSubmit}>
        <div className="flex flex-col justify-center items-center">
          <div className="mb-[15px]">
            <PhoneInput
              country={"dz"}
              value={phoneNum}
              onChange={(value) => {
                setPhoneNum(value);
              }}
              countryCodeEditable={false}
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full p-[10px] text-forest-green text-[15px] font-semibold bg-bright-green rounded-3xl hover:bg-main-green duration-150 ease-in-out"
        >
          Send Verification Code
        </button>
      </form>
      <div id="recaptcha-container"></div>
      {showVerInp && (
        <div className="mt-4">
          <input
            type="text"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
            placeholder="Enter verification code"
            className="w-full p-3 border rounded-md"
          />
          <button
            onClick={handleVerifyCode}
            className="mt-2 w-full p-3 text-white font-semibold bg-blue-500 rounded-md hover:bg-blue-600"
          >
            Verify Code
          </button>
        </div>
      )}
      <Toaster position="top-center" reverseOrder={false} />
    </section>
  );
}

export default PhoneLogin;
