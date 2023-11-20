import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

const RecuiterLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="font-roboto">
      <div className="between-flex shadow-[0_6px_12px_0_rgba(171,190,209,0.3)] px-4  xl:px-[92px] h-[100px] md:h-[160px]">
        <Link to="/">
          <img
            src="/images/logo.svg"
            alt=""
            className="w-[100px] lg:w-[150px] xl:w-auto"
          />{" "}
        </Link>
        <div className="">
          <img src="/images/hamburger.svg" alt="" className="md:hidden" />
        </div>
        <div className="sm-text hidden md:flex gap-x-8 items-center font-lato">
          <Link to="/dashboard/create-job" className="bg-[#102866] text-[#fff] rounded-[0.375rem] py-[7px] px-[30px] text-base">
            Add a Job
          </Link>
          <button className="">
            <img src="/images/bell.svg" alt="" className="" />
          </button>
          <div className="center-flex gap-2">
            <div className="w-[30px] h-[30px] text-[#fff] bg-[#FF0000] rounded-full center-flex ">
              <p className="">H</p>
            </div>
            <button className="">
              <img src="/images/dropdown.svg" alt="" className="" />
            </button>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};
export default RecuiterLayout;
