import React from "react";

const Step4 = ({onNext}) => {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <h1 className="text-4xl ubuntu-bold text-MarineBlue">Finishing up</h1>
        <p className="text-slate-500">
          Double-check everything looks OK before confirming.
        </p>
      </div>
      <div className="bg-slate-100 p-5 rounded-lg space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-lg ubuntu-bold text-MarineBlue">
              Arcade (Monthly)
            </h1>
            <p className="text-sm text-PurplishBlue hover:underline hover:cursor-pointer">
              Change
            </p>
          </div>
          <h1 className="text-lg  text-MarineBlue">$9/mo</h1>
        </div>
        <hr />
        <div className="space-y-2">
          <div className="flex justify-between">
            <p className="text-sm text-slate-400 hover:underline hover:pointer">
              Online Service
            </p>
            <h1 className="text-sm  text-MarineBlue">$9/mo</h1>
          </div>
          <div className="flex justify-between">
            <p className="text-sm  text-slate-400 hover:underline hover:pointer">
              Larger Storage
            </p>
            <h1 className="text-sm  text-MarineBlue">$9/mo</h1>
          </div>
        </div>
      </div>
      <div className="flex justify-between px-4">
        <p className="text-sm text-slate-400 hover:underline hover:pointer">
          Total (per month)
        </p>
        <h1 className="text-xl ubuntu-bold text-PurplishBlue ue">$12/mo</h1>
      </div>
      <div className="mt-10 flex justify-between items-end">
        <button
          type="submit"
          className="text-slate-400 ubuntu-bold rounded-lg px-4 py-2 mt-20"
        >
          Go back
        </button>
        <button
          type="submit"
          className="bg-PurplishBlue text-white rounded-lg px-4 py-2 mt-12 mr-5"
          onClick={() => {
            console.log("clicked")
            onNext()}}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Step4;
