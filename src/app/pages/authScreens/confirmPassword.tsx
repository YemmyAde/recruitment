import React from "react";
import { Link } from "react-router-dom";

const CreatePassword = () => {
  return (
    <div className="flex font-lato gap-[5%] w-full max-w-[1440px] mx-auto">
      <div className="text-[#A8ADAF] mx-auto mt-[30px] px-4 md:px-0 md:w-[50%] pb-[50px] flex justify-center">
        <div className="max-w-[620px] px-[0px]">
          <div className="text-center md:text-left">
            <Link to="/">
              <img
                src="/images/logo.svg"
                alt=""
                className="w-[100px] lg:w-[150px] xl:w-auto"
              />{" "}
            </Link>
            <h3 className="font-bold  leading-[2rem] text-[1.75rem] text-[#2864FF] md:text-[#000] font-roboto mt-[50px]">
              Create Password
            </h3>
            <p className="text-lg mb-[20px] font-normal font-lato">
              to continue to recruitN
            </p>
          </div>
          <form action="">
            <input
              type="password"
              className="form-input"
              name=""
              id=""
              placeholder="Password"
            />
            <input
              type="password"
              className="form-input"
              name=""
              id=""
              placeholder="Confirm Password"
            />

            <button className="bg-[#2864FF] text-[#fff] text-base w-full md:w-[400px] p-4 mt-[40px] mb-[20px] rounded-[8px] font-inter text-[1rem] font-medium ">
              Finish
            </button>
          </form>
        </div>
      </div>
      <div className="w-[45%] right-half relative hidden md:block">
        <div className="absolute text-[#102866] bottom-20 left-12">
          <h1 className="font-inter font-bold text-4xl">
            RecruitN: Your Seamless Hr
          </h1>
          <p className="font-istok text-lg mt-3 w-[90%]">
            Discover, hire, and manage the perfect candidates with our seamless
            recruitment software.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreatePassword;
