import React, { useState } from "react";
import { useForm } from "react-hook-form";
import iconArcade from "../assets/images/icon-arcade.svg";
import iconAdvanced from "../assets/images/icon-advanced.svg";
import iconPro from "../assets/images/icon-pro.svg";

const Step2 = ({ onNext, onPrev }) => {
  const { handleSubmit } = useForm();
  const [selectedMembership, setSelectedMembership] = useState(null);

  const handleMembershipChange = (value) => {
    setSelectedMembership(value);
    console.log(value);
  };

  const onSubmitStep2 = (data) => {
    console.log(data);
    onNext();
  };

  return (
    <form onSubmit={handleSubmit(onSubmitStep2)} className="space-y-4">
      <h1 className="text-4xl ubuntu-bold text-MarineBlue">Select your plan</h1>
      <p className="text-slate-500">
        You have the option of monthly or yearly billing.
      </p>
      <div className="space-x-2 flex">
        <button
          type="button"
          className={`flex items-center border rounded-lg cursor-pointer transition duration-300 ease-in-out hover:border-PurplishBlue focus:outline-none ${
            selectedMembership === "arcade"
              ? "border-PurplishBlue"
              : "border-gray-300"
          }`}
          onClick={() => handleMembershipChange("arcade")}
        >
          <div className="flex flex-col w-[130px] h-[150px] items-start justify-between p-5">
            <img src={iconArcade} alt="" />
            <div className="flex flex-col items-start">
              <h1 className="text-lg text-MarineBlue ubuntu-bold">Arcade</h1>
              <p className="text-sm text-slate-500">$9/mo</p>
            </div>
          </div>
        </button>
        <button
          type="button"
          className={`flex items-center border rounded-lg cursor-pointer transition duration-300 ease-in-out hover:border-PurplishBlue focus:outline-none ${
            selectedMembership === "advanced"
              ? "border-PurplishBlue"
              : "border-gray-300"
          }`}
          onClick={() => handleMembershipChange("advanced")}
        >
          <div className="flex flex-col w-[130px] h-[150px] items-start justify-between p-5">
            <img src={iconAdvanced} alt="" />
            <div className="flex flex-col items-start">
              <h1 className="text-lg text-MarineBlue ubuntu-bold">Advanced</h1>
              <p className="text-sm text-slate-500">$12/mo</p>
            </div>
          </div>
        </button>
        <button
          type="button"
          className={`flex items-center border rounded-lg cursor-pointer transition duration-300 ease-in-out hover:border-PurplishBlue focus:outline-none ${
            selectedMembership === "pro"
              ? "border-PurplishBlue"
              : "border-gray-300"
          }`}
          onClick={() => handleMembershipChange("pro")}
        >
          <div className="flex flex-col w-[130px] h-[150px] items-start justify-between p-5">
            <img src={iconPro} alt="" />
            <div className="flex flex-col items-start">
              <h1 className="text-lg text-MarineBlue ubuntu-bold">Pro</h1>
              <p className="text-sm text-slate-500">$15/mo</p>
            </div>
          </div>
        </button>
      </div>

      {/* toggle button begins */}
      <div className="mt-5 w-full flex justify-center  bg-slate-100 rounded-lg py-2">
      <span class="text-md text-MarineBlue ubuntu-bold flex items-center mr-2">Monthly</span>
        <label class="relative inline-flex items-center cursor-pointer">
          
          <input type="checkbox" value="" class="sr-only peer" />
          <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span class="text-md text-MarineBlue ubuntu-bold flex items-center ml-2">Yearly</span>
        </label>
      </div>
      <div className="mt-10 flex justify-between items-end">
        <button
          className="text-MarineBlue ubuntu-bold rounded-lg px-4 py-2 mt-20"
          onClick={() => onPrev()}
        >
          Go back
        </button>
        <button
          type="submit"
          className="bg-MarineBlue text-white rounded-lg px-4 py-2 mt-12 mr-5"
        >
          Next Step
        </button>
      </div>
    </form>
  );
};

export default Step2;
