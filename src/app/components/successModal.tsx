import React from "react";
import { Link } from "react-router-dom";

const SuccessModal = () => {
  return (
    <div className="flex justify-center items-center w-full h-[100vh] fixed top-0 bg-[rgba(233,239,255,0.4)] backdrop-blur-sm z-[100]">
      <div className="bg-[#e8effe] rounded-[20px] p-12 w-[400px] mx-auto text-center">
        <div className="flex items-center justify-center">
          <img src="/images/high-five.svg" alt="" className="" />
        </div>
        <div className="my-4">
          <p className=" text-[#A8ADAF] font-bold text-base ">
            You have succesfully created an account.
          </p>
          <p className="text-[#263238] text-sm">
            You can now go to your{" "}
            <Link to="" className="text-[#2864FF] underline">
              {" "}
              Dashboard{" "}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
