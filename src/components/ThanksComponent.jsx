import React from "react";
import thanksImg from "../assets/images/icon-thank-you.svg";

const ThanksComponent = () => {
  return (
    <div className="space-y-5 flex flex-col items-center justify-center">
      <img src={thanksImg} alt="thank you image" className="h-28" />
      <h1 className="text-4xl ubuntu-bold text-MarineBlue">Thank you!</h1>
      <p className="text-slate-500 text-center">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
};

export default ThanksComponent;
