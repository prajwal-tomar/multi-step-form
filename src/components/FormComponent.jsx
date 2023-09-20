import { useState } from "react";
import bgLeft from "../assets/images/bg-sidebar-desktop.svg";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import ThanksComponent from "./ThanksComponent";

const FormComponent = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  return (
    <div className="bg-white flex w-[900px] justify-between rounded-lg ubuntu-regular">
      <div className="p-3 w-1/2 rounded relative">
        <img src={bgLeft} alt="bg-image" />
        <div className="absolute top-10 left-10 space-y-5">
          <div className="flex items-center gap-5">
            <div className="rounded-full bg-LightBlue text-center w-8 h-8 flex items-center justify-center">
              <h1 className="ubuntu-bold">1</h1>
            </div>
            <div>
              <h1 className="text-LightGray">STEP 1</h1>
              <h1 className="text-white ubuntu-bold text-md">YOUR INFO</h1>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="rounded-full bg-LightBlue text-center w-8 h-8 flex items-center justify-center">
              <h1 className="ubuntu-bold">2</h1>
            </div>
            <div>
              <h1 className="text-LightGray">STEP 2</h1>
              <h1 className="text-white ubuntu-bold text-md">SELECT PLAN</h1>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="rounded-full bg-LightBlue text-center w-8 h-8 flex items-center justify-center">
              <h1 className="ubuntu-bold">3</h1>
            </div>
            <div>
              <h1 className="text-LightGray">STEP 3</h1>
              <h1 className="text-white ubuntu-bold text-md">ADD-ONS</h1>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="rounded-full bg-LightBlue text-center w-8 h-8 flex items-center justify-center">
              <h1 className="ubuntu-bold">4</h1>
            </div>
            <div>
              <h1 className="text-LightGray">STEP 4</h1>
              <h1 className="text-white ubuntu-bold text-md">SUMMARY</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        {currentStep === 1 && <Step1 onNext={handleNextStep} />}
        {currentStep === 2 && (
          <Step2 onNext={handleNextStep} onPrev={handlePrevStep} />
        )}
        {currentStep === 3 && (
          <Step3 onNext={handleNextStep} onPrev={handlePrevStep} />
        )}
        {currentStep === 4 && (
          <Step4 onNext={handleNextStep} onPrev={handlePrevStep} />
        )}
        {currentStep === 5 && <ThanksComponent />}
        {/* <ThanksComponent /> */}
      </div>
    </div>
  );
};

export default FormComponent;
