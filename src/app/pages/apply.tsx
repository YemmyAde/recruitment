import React from "react";
import SuccessModal from "../components/successModal";

const Apply = () => {
  return (
    <div className="font-roboto">
      <SuccessModal />
      <div className="between-flex shadow-[0_16px_32px_0_rgba(171,190,209,0.6)] md:shadow-[0_16px_32px_0_rgba(171,190,209,0.3)] px-4  xl:px-[92px] pt-14 pb-12 bg-[#E9EFFF] md:bg-transparent gap-2">
        <div className="">
          <h3 className="text-lg md:text-[28px] md:leading-[36px] text-[#21271F] font-bold">
            Your Job application
          </h3>
          <p className="text-sm md:text-base mt-2 font-lato">
            Thanks for your interest. Tell us aboout yourself!
          </p>
          <div className="flex items-center gap-3 mt-3">
            <div className="w-[20px] h-[20px] md:w-[39px] md:h-[39px]">
              <img src="/images/company_logo.svg" alt="" className="" />
            </div>
            <p className="font-medium text-[#000] ">Consulting</p>
          </div>
        </div>
        <div className="sm-text flex flex-wrap gap-y-2 gap-x-2 md:gap-x-8 items-center font-lato">
          <button className="bg-[#fff] text-[#2864FF] border-[1px] border-[#2864FF] rounded-[0.5rem] py-1 md:py-[10px] px-[15px] md:px-[30px]">
            Cancel
          </button>
          <button className="bg-[#2864FF] text-[#fff] rounded-[0.5rem] py-[5px] md:py-[11px]  px-[15px] md:px-[20px]">
            Submit
          </button>
        </div>
      </div>

      <div className="px-4  xl:px-[92px] py-12">
        <div className="border-[1px] border-[#2864FF] rounded-[20px] px-[15px] md:px-[33px] py-3 md:py-6 flex justify-start gap-4 items-center flex-wrap sm:flex-nowrap">
          <div className="bg-[#424E3E] rounded-[5px]  w-[43px] h-[43px] hidden md:flex items-center justify-center ">
            <img src="/images/autofill.svg" alt="" className="" />
          </div>
          <p className="text-[#000] font-semibold sm-text lg-text">
            AUTOFILL APPLICATION:
            <span className="pl-2 font-lato sm-text font-normal">
              Save time by importing your resume in one of the following
              formats: .pdf, .doc, .docx, .odt, or .rtf.
            </span>
          </p>

          <div className=" sm:ml-4 md:ml-12 min-w-[150px] md:min-w-[200pxx]">
            <button className="blue-button py-2 md:py-4 px-4 md:px-10 font-lato sm-text font-normal">
              Upload resume
            </button>
          </div>
        </div>
        <div className="mt-[60px]">
          <div className="flex justify-between items-start gap-4 mt-4 flex-col md:flex-row">
            <div className="w-full">
              <p className="bg-[#E9EFFF] rounded-[5px] px-3 mdpx-[24px] py-2 md:py-4 text-[#2864FF] text-base md:md-text mb-3 w-auto font-medium inline-block">
                Personal Information
              </p>
              <div className="flex gap-4 justify-between">
                <div className="w-full">
                  <label htmlFor="" className="">
                    <img src="/images/required.svg" alt="" className="" />
                  </label>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="text-[#A8ADAF] sm-text  apply-form-input w-full"
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="" className="">
                    <img src="/images/required.svg" alt="" className="" />
                  </label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="text-[#A8ADAF] sm-text  apply-form-input w-full"
                  />
                </div>
              </div>
              <div className="">
                <label htmlFor="" className="">
                  <img src="/images/required.svg" alt="" className="" />
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="text-[#A8ADAF] sm-text  apply-form-input w-full"
                />
              </div>
              <div className="">
                <label htmlFor="" className="">
                  <img src="/images/required.svg" alt="" className="" />
                </label>
                <input
                  type="number"
                  placeholder="Phone"
                  className="text-[#A8ADAF] sm-text  apply-form-input w-full"
                />
              </div>
              <div className="">
                <label htmlFor="" className="">
                  <img src="/images/required.svg" alt="" className="" />
                </label>
                <input
                  type="text"
                  placeholder="Address"
                  className="text-[#A8ADAF] sm-text  apply-form-input w-full"
                />
              </div>
            </div>
            <div className="border-dashed border-[#2864FF] border-[1px] rounded-[10px] w-[90%] max-w-[380px] sm:w-[395px] h-[200px] md:h-[380px] p-3  flex justify-center items-center relative mx-auto md:mx-12  order-first md:order-last">
              <p className="font-lato sm-text text-[#A8ADAF] absolute left-3 top-3">
                Resume
              </p>

              <div className="flex items-center justify-center flex-col text-[#000]">
                <div className="rounded-[300px] bg-[#E9EFFF] w-[40px] h-[37px] flex items-center justify-center">
                  <img src="/images/upload.svg" alt="" className=" " />
                </div>
                <p className="font-medium md-text mt-2">Upload a File</p>
                <p className="font-lato sm-text">or drag and drop here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apply;
