import React from "react";
import { useForm, Controller } from "react-hook-form";

const Step1 = ({ onNext }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    onNext();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <h1 className="text-4xl ubuntu-bold text-MarineBlue">Personal Info</h1>
      <p className="text-slate-500">
        Please provide your name, email address, and phone number.
      </p>
      <div className="flex flex-col space-y-1">
        <label className="ubuntu-medium text-MarineBlue">Name:</label>
        <Controller
          name="name"
          control={control}
          rules={{ required: "Name is required" }}
          render={({ field }) => (
            <>
              <input
                {...field}
                className={`border p-1 rounded-lg ${
                  errors.name ? "border border-red-500" : ""
                }`}
                placeholder="e.g. Stephen King"
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </>
          )}
        />
      </div>
      <div className="flex flex-col space-y-1">
        <label className="ubuntu-medium text-MarineBlue">Email Address:</label>
        <Controller
          name="email"
          control={control}
          rules={{
            required: "Email address is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email address",
            },
          }}
          render={({ field }) => (
            <>
              <input
                {...field}
                className={`border p-1 rounded-lg ${
                  errors.name ? "border border-red-500" : ""
                }`}
                placeholder="e.g. Stephen King"
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </>
          )}
        />
      </div>
      <div className="flex flex-col space-y-1">
        <label className="ubuntu-medium text-MarineBlue">Phone Number:</label>
        <Controller
          name="phone"
          control={control}
          rules={{
            required: "Phone number is required",
            pattern: {
              value: /^[0-9]{10}$/i,
              message: "Invalid phone number (10 digits required)",
            },
          }}
          render={({ field }) => (
            <>
              <input
                {...field}
                className={`border p-1 rounded-lg ${
                  errors.name ? "border border-red-500" : ""
                }`}
                placeholder="e.g. Stephen King"
              />
              {errors.phone && (
                <p className="text-red-500">{errors.phone.message}</p>
              )}
            </>
          )}
        />
      </div>
      <div className="flex justify-end">
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

export default Step1;
