import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";

function Settings() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [cardId, setCardId] = useState("");
  const [baridiMobNum, setBaridiMobNum] = useState("");
  const [readyFoundEmail, setReadyFoundEmail] = useState(false);
  const [readyFoundPhoneNum, setReadyFoundPhoneNum] = useState(false);
  return (
    <section className="ml-[20%] p-[30px]">
      <form
        className="p-[20px] grid grid-cols-1 sm:grid-cols-2 justify-center gap-[20px] w-[100%] lg:w-auto"
        action=""
      >
        <div className="flex flex-col gap-[10px]">
          <label
            className="font-semibold text-forest-green"
            htmlFor="first-name"
          >
            First Name
          </label>
          <input
            className="border-2 border-third-gray hover:border-second-gray duration-500 ease-in-out outline-forest-green p-[8px] rounded-md"
            type="text"
            name="first-name"
            id="first-name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-[10px]">
          <label
            className="font-semibold text-forest-green"
            htmlFor="last-name"
          >
            Last Name
          </label>
          <input
            className="border-2 border-third-gray hover:border-second-gray duration-500 ease-in-out outline-forest-green p-[8px] rounded-md"
            type="text"
            name="last-name"
            id="last-name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-[10px]">
          <label
            className="font-semibold text-forest-green"
            htmlFor="user-email"
          >
            Email
          </label>
          {!readyFoundEmail ? (
            <input
              className="border-2 border-third-gray hover:border-second-gray duration-500 ease-in-out outline-forest-green p-[8px] rounded-md"
              type="email"
              name="user-email"
              id="user-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          ) : (
            <input
              className="border-2 border-third-gray hover:border-second-gray duration-500 ease-in-out outline-forest-green p-[8px] rounded-md"
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
            className="font-semibold text-forest-green"
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
              />
            ) : (
              <PhoneInput country={"dz"} value={phoneNum} disabled />
            )}
          </div>
        </div>
        <div className="flex flex-col gap-[10px]">
          <label className="font-semibold text-forest-green" htmlFor="card-id">
            Card Id
          </label>
          <input
            className="border-2 border-third-gray hover:border-second-gray duration-500 ease-in-out outline-forest-green p-[8px] rounded-md"
            type="number"
            name="card-id"
            id="card-id"
            value={cardId}
            onChange={(e) => setCardId(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-[10px]">
          <label
            className="font-semibold text-forest-green"
            htmlFor="baridi-num"
          >
            Baridi Mob number
          </label>
          <input
            className="border-2 border-third-gray hover:border-second-gray duration-500 ease-in-out outline-forest-green p-[8px] rounded-md"
            type="number"
            name="baridi-num"
            id="baridi-num"
            value={baridiMobNum}
            onChange={(e) => setBaridiMobNum(e.target.value)}
          />
        </div>
        <button
          className="bg-fourth-red p-[8px] text-main-black hover:text-whitex rounded-2xl font-semibold hover:bg-second-red duration-300 ease-in-out"
        >
          Save
        </button>
      </form>
    </section>
  );
}

export default Settings;
