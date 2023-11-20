import React from "react";
import { Link } from "react-router-dom";

const Verify = () => {
  const emptyArray = ["", "", "", "", "", "", ""];
  return (
    <div className="flex font-lato gap-[5%] w-full max-w-[1440px] mx-auto">
      <div className="text-[#A8ADAF] mx-auto mt-[30px] px-4 md:px-0 pb-[50px] flex justify-center">
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
              Verify your email
            </h3>
            <p className="text-lg mb-[20px] font-normal font-lato">
              to continue to recruitN
            </p>
          </div>
          <p className="bg-[#2864FF] text-[#fff] rounded-[0.375rem] py-4 px-12 text-base w-auto inline-block">
            email@mail.com
          </p>
          <h4 className="font-roboto font-semibold lg-text text-[] my-12">
            Enter the verification code below
          </h4>

          <div className="flex gap-4">
            {emptyArray.map((item) => {
              return (
                <input
                  key={item.toString()}
                  type="text"
                  className="border-[1px] border-[#D4D6D7] rounded-[10px] w-6 py-5 px-8 "
                  name=""
                  id=""
                  placeholder=""
                />
              );
            })}
          </div>
          <div className="relative text-center md:text-left mt-6">
            <p className="text-sm font-lato md-text font-normal">
              Didn’t recieve a code yet?
              <Link
                to=""
                className="text-[#2864FF] font-roboto font-semibold lg-text ml-2"
              >
                Resend
              </Link>
            </p>
          </div>
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

export default Verify;
