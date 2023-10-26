import { useState } from "react";
import bgDesktop from "../assets/images/bg-sidebar-desktop.svg";
import bgMobile from "../assets/images/bg-sidebar-mobile.svg";
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
    <div className="flex flex-col items-center relative">
      <img src={bgMobile} alt="bg-image-mobile" className="md:hidden block w-full" />
      <div className="bg-white flex md:flex-row flex-col md:w-[900px] w-[400px] justify-between rounded-lg ubuntu-regular">
        <div className="p-3 md:w-1/2 rounded relative">
          <img src={bgDesktop} alt="bg-image" className="md:block hidden" />
          <div className="absolute md:block flex md:top-10 -top-32 md:left-10 left-16 md:space-y-5 md:space-x-0 space-x-5">
            <div className="flex items-center gap-5">
              <div className="rounded-full bg-LightBlue text-center w-8 h-8 flex items-center justify-center">
                <h1 className="ubuntu-bold">1</h1>
              </div>
              <div className="md:block hidden">
                <h1 className="text-LightGray">STEP 1</h1>
                <h1 className="text-white ubuntu-bold text-md">YOUR INFO</h1>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="rounded-full bg-LightBlue text-center w-8 h-8 flex items-center justify-center">
                <h1 className="ubuntu-bold">2</h1>
              </div>
              <div className="md:block hidden">
                <h1 className="text-LightGray">STEP 2</h1>
                <h1 className="text-white ubuntu-bold text-md">SELECT PLAN</h1>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="rounded-full bg-LightBlue text-center w-8 h-8 flex items-center justify-center">
                <h1 className="ubuntu-bold">3</h1>
              </div>
              <div className="md:block hidden">
                <h1 className="text-LightGray">STEP 3</h1>
                <h1 className="text-white ubuntu-bold text-md">ADD-ONS</h1>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="rounded-full bg-LightBlue text-center w-8 h-8 flex items-center justify-center">
                <h1 className="ubuntu-bold">4</h1>
              </div>
              <div className="md:block hidden">
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
    </div>
  );
};

export default FormComponent;
