import React, { useEffect, useState } from "react";
import formImg from "../../assets/user-collect-data/form-img.jpg";
import chipCard from "../../assets/overview/chip-card.png";
import chipCardBlack from "../../assets/overview/chip-card-black.png";
import algeriePost from "../../assets/overview/algerie-poste.svg";
import toast, { Toaster } from "react-hot-toast";

import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import PhoneInput from "react-phone-input-2";

function UserCollectData() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [cardId, setCardId] = useState("");
  const [baridiMobNum, setBaridiMobNum] = useState("00799999");
  const [readyFoundEmail, setReadyFoundEmail] = useState(false);
  const [readyFoundPhoneNum, setReadyFoundPhoneNum] = useState(false);
  const [expiryDate, setExpiryDate] = useState("");
  const [postCode, setPostCode] = useState("");

  const formatExpiryDate = () => {
    let formattedDate = expiryDate.replace(/\D/g, "");

    if (formattedDate.length > 2) {
      formattedDate = formattedDate.slice(0, 2) + "/" + formattedDate.slice(2);
    }
    setExpiryDate(formattedDate);
  };
  const handleChangeBaridiMobNum = (e) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 20); // Remove non-numeric characters and limit to 20 digits
    setBaridiMobNum(value);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user.email) {
        setEmail(user.email);
        setReadyFoundEmail(true);
      }
      if (user.phoneNumber) {
        setPhoneNum(user.phoneNumber);
        setReadyFoundPhoneNum(true);
      }
    });
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      phoneNum === "" ||
      cardId === "" ||
      baridiMobNum.length < 20 ||
      expiryDate === "" ||
      postCode === ""
    ) {
      toast.error("Please enter all the required data!");
    } else {
      addDoc(collection(db, "users"), {
        firstName,
        lastName,
        email,
        phoneNum,
        cardId,
        baridiMobNum,
        expiryDate,
        postCode,
      });
      navigate("/payper/login");
    }
  };

  return (
    <section>
      <h1 className="text-center text-2xl my-[20px] text-second-blue font-semibold">
        Enter the required data please!
      </h1>
      <div className="flex flex-wrap lg:flex-nowrap p-[30px] gap-[50px] border border-second-blue rounded-lg overflow-hidden">
        <div className="grid grid-cols-1 gap-[20px]">
          <div className="bg-[#4C49ED] py-[15px] px-[30px] rounded-xl min-w-[400px]">
            <div className="flex items-center justify-end">
              <div>
                <img src={chipCard} alt="chip-card" />
              </div>
            </div>
            <div className="flex justify-between mt-[20px]">
              <div>
                <h3 className="font-bold text-special-white">Card Holder</h3>
                <p className="text-white">
                  {firstName || "******"} {lastName || "******"}
                </p>
              </div>
              <div>
                <h3 className="font-bold text-special-white">Expiry Date</h3>
                <p className="text-right text-white">{expiryDate || "**/**"}</p>
              </div>
            </div>
            <div className="mt-[40px] flex items-center justify-between">
              <p className="text-white">{cardId || "**** **** **** ****"}</p>
              <div>
                <img
                  className="w-[30px]"
                  src={algeriePost}
                  alt="algerie-post-logo"
                />
              </div>
            </div>
          </div>
          <div className="bg-white py-[15px] px-[30px] rounded-xl border min-w-[400px]">
            <div className="flex items-center justify-end">
              <div>
                <img src={chipCardBlack} alt="chip-card" />
              </div>
            </div>
            <div className="flex justify-between mt-[20px]">
              <div>
                <h3 className="font-bold text-third-blue">Card Holder</h3>
                <p className="text-second-blue">
                  {firstName || "******"} {lastName || "******"}
                </p>
              </div>
              <div>
                <h3 className="font-bold text-third-blue">Expiry Date</h3>
                <p className="text-right text-second-blue">
                  {expiryDate || "**/**"}
                </p>
              </div>
            </div>
            <div className="mt-[40px] flex items-center justify-between">
              <p className="text-second-blue">{baridiMobNum || "******"}</p>
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
        <div>
          <form
            className="grid grid-cols-1 sm:grid-cols-2 justify-center gap-[20px] w-[100%] lg:w-auto"
            action=""
          >
            <div className="flex flex-col gap-[10px]">
              <label
                className="font-semibold text-second-blue"
                htmlFor="first-name"
              >
                First Name
              </label>
              <input
                className="border-2 border-third-gray hover:border-second-gray duration-500 ease-in-out outline-second-blue p-[8px] rounded-md"
                type="text"
                name="first-name"
                id="first-name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="eg: Abdelaziz"
                maxLength={15}
              />
            </div>
            <div className="flex flex-col gap-[10px]">
              <label
                className="font-semibold text-second-blue"
                htmlFor="last-name"
              >
                Last Name
              </label>
              <input
                className="border-2 border-third-gray hover:border-second-gray duration-500 ease-in-out outline-second-blue p-[8px] rounded-md"
                type="text"
                name="last-name"
                id="last-name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="eg: Bourouaiah"
                maxLength={15}
              />
            </div>
            <div className="flex flex-col gap-[10px]">
              <label
                className="font-semibold text-second-blue"
                htmlFor="user-email"
              >
                Email
              </label>
              {!readyFoundEmail ? (
                <input
                  className="border-2 border-third-gray hover:border-second-gray duration-500 ease-in-out outline-second-blue p-[8px] rounded-md"
                  type="email"
                  name="user-email"
                  id="user-email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="eg: abdoubrh26@gmail.com"
                />
              ) : (
                <input
                  className="border-2 border-third-gray hover:border-second-gray duration-500 ease-in-out outline-second-blue p-[8px] rounded-md"
                  type="email"
                  name="user-email"
                  id="user-email"
                  value={email}
                  readOnly
                />
              )}
            </div>
            <div className="flex flex-col gap-[10px]">
              <label
                className="font-semibold text-second-blue"
                htmlFor="phone-num"
              >
                Phone Number
              </label>
              <div className="border-2 border-third-gray p-[2.5px] rounded-md overflow-hidden">
                {!readyFoundPhoneNum ? (
                  <PhoneInput
                    country={"dz"}
                    value={phoneNum}
                    onChange={(value) => {
                      setPhoneNum(value);
                    }}
                    countryCodeEditable={false}
                    maxLength={5}
                  />
                ) : (
                  <PhoneInput country={"dz"} value={phoneNum} disabled />
                )}
              </div>
            </div>
            <div className="flex flex-col gap-[10px]">
              <label
                className="font-semibold text-second-blue"
                htmlFor="card-id"
              >
                Card Id
              </label>
              <input
                className="border-2 border-third-gray hover:border-second-gray duration-500 ease-in-out outline-second-blue p-[8px] rounded-md"
                type="text"
                name="card-id"
                id="card-id"
                value={cardId}
                onChange={(e) => {
                  const newValue = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
                  setCardId(newValue.replace(/(.{4})/g, "$1 "));
                }}
                placeholder="eg: 6280 7030 0775 4507"
                maxLength={19}
              />
            </div>

            <div className="flex flex-col gap-[10px]">
              <label
                className="font-semibold text-second-blue"
                htmlFor="baridi-num"
              >
                Baridi Mob number
              </label>
              <input
                className="border-2 border-third-gray hover:border-second-gray duration-500 ease-in-out outline-second-blue p-[8px] rounded-md"
                type="number"
                name="baridi-num"
                id="baridi-num"
                value={baridiMobNum}
                onChange={handleChangeBaridiMobNum}
                placeholder="eg: 00799999002893983857"
                maxLength={20}
              />
            </div>
            <div className="flex flex-col gap-[10px]">
              <label
                className="font-semibold text-second-blue"
                htmlFor="baridi-num"
              >
                Expiry Date
              </label>
              <input
                type="text"
                className="border-2 border-third-gray hover:border-second-gray duration-500 ease-in-out outline-second-blue p-[8px] rounded-md"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                onBlur={formatExpiryDate}
                placeholder="Expiry Date (MM/YY)"
                maxLength={5}
              />
            </div>

            <div className="flex flex-col gap-[10px]">
              <label
                className="font-semibold text-second-blue"
                htmlFor="baridi-num"
              >
                Postcode
              </label>
              <input
                className="border-2 border-third-gray hover:border-second-gray duration-500 ease-in-out outline-second-blue p-[8px] rounded-md"
                type="number"
                name="post-code"
                id="post-code"
                value={postCode}
                onChange={(e) => {
                  const formattedValue = e.target.value
                    .replace(/\D/g, "")
                    .slice(0, 5); // Remove non-numeric characters and limit to 5 digits
                  setPostCode(formattedValue);
                }}
                placeholder="eg: 09300"
              />
            </div>
            <button
              onClick={handleSubmit}
              className="w-full bg-second-blue text-white p-[8px] rounded-2xl font-semibold hover:bg-main-blue duration-300 ease-in-out"
            >
              Next
            </button>
          </form>
        </div>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </section>
  );
}

export default UserCollectData;
