import React, { useState } from "react";
import checkImg from "../assets/images/icon-checkmark.svg";

const Step3 = ({ onNext, onPrev }) => {
  const [selectedAddOns, setSelectedAddOns] = useState([]);

  const toggleAddOn = (addOnName) => {
    if (selectedAddOns.includes(addOnName)) {
      // all the names that arent equal to currently clicked addon will be remove. this is to uncheck.
      setSelectedAddOns(selectedAddOns.filter((name) => name !== addOnName));
    } else {
      // this is to add to addon list
      setSelectedAddOns([...selectedAddOns, addOnName]);
    }
  };

  return (
    <div className="space-y-4 w-full p-8">
      <h1 className="text-4xl ubuntu-bold text-MarineBlue">Pick add-ons</h1>
      <p className="text-slate-500">
        Add-ons help enhance your gaming experience.
      </p>
      <div className="space-y-4">
        {/* Online Service */}
        <div
          className={`p-4 border rounded-lg cursor-pointer transition duration-300 ease-in-out hover:border-PurplishBlue ${
            selectedAddOns.includes("Online Service")
              ? "border-PurplishBlue"
              : "border-gray-300"
          }`}
          onClick={() => toggleAddOn("Online Service")}
        >
          <div className="flex items-center space-x-5">
            {selectedAddOns.includes("Online Service") && (
              <div className="bg-PurplishBlue p-1 h-5 w-5 rounded-md flex">
                <img src={checkImg} alt="" />
              </div>
            )}
            <div className="flex flex-col">
              <span className="text-lg text-MarineBlue ubuntu-bold">
                Online Service
              </span>
              <p className="text-gray-600">Access to multiplayer games</p>
            </div>
          </div>
        </div>
        <div
          className={`p-4 border rounded-lg cursor-pointer transition duration-300 ease-in-out hover:border-PurplishBlue ${
            selectedAddOns.includes("Larger storage")
              ? "border-PurplishBlue"
              : "border-gray-300"
          }`}
          onClick={() => toggleAddOn("Larger storage")}
        >
          <div className="flex items-center space-x-5">
            {selectedAddOns.includes("Larger storage") && (
              <div className="bg-PurplishBlue p-1 h-5 w-5 rounded-md flex">
                <img src={checkImg} alt="" />
              </div>
            )}
            <div className="flex flex-col">
              <span className="text-lg text-MarineBlue ubuntu-bold">
                Larger storage
              </span>
              <p className="text-gray-600">Extra 1TB of cloud save</p>
            </div>
          </div>
        </div>
        <div
          className={`p-4 border rounded-lg cursor-pointer transition duration-300 ease-in-out hover:border-PurplishBlue ${
            selectedAddOns.includes("Customizable Profile")
              ? "border-PurplishBlue"
              : "border-gray-300"
          }`}
          onClick={() => toggleAddOn("Customizable Profile")}
        >
          <div className="flex items-center space-x-5">
            {selectedAddOns.includes("Customizable Profile") && (
              <div className="bg-PurplishBlue p-1 h-5 w-5 rounded-md flex">
                <img src={checkImg} alt="" />
              </div>
            )}
            <div className="flex flex-col">
              <span className="text-lg text-MarineBlue ubuntu-bold">
                Customizable Profile
              </span>
              <p className="text-gray-600">Custom theme on your profile</p>
            </div>
          </div>
        </div>
        <div className="mt-10 flex justify-between items-end">
          <button
            type="submit"
            className="text-MarineBlue ubuntu-bold rounded-lg px-4 py-2 mt-20"
            onClick={() => onPrev()}
          >
            Go back
          </button>
          <button
            type="submit"
            className="bg-MarineBlue text-white rounded-lg px-4 py-2 mt-12 mr-5"
            onClick={() => onNext()}
          >
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step3;
