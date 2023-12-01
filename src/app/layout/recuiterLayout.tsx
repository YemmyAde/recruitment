import React, { ReactNode, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { logOut } from "../services/authService";

const RecuiterLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [userDetails, setUserDetails] = useState<any>();
  const user = JSON.parse(localStorage.getItem("recruitnUser")!);
  const [options, setOptions] = useState<boolean>(false);



  useEffect(() => {
    if (user) {
      setUserDetails(user?.data?.user);
    }
  }, []);

  return (
    <div className="font-roboto">
      <div className="between-flex shadow-[0_6px_12px_0_rgba(171,190,209,0.3)] px-4  xl:px-[92px] h-[100px] md:h-[160px]">
        <Link to="/dashboard">
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
          <Link
            to="/dashboard/create-job"
            className="bg-[#102866] text-[#fff] rounded-[0.375rem] py-[7px] px-[30px] text-base"
          >
            Add a Job
          </Link>
          <button className="">
            <img src="/images/bell.svg" alt="" className="" />
          </button>
          <div className=" relative">
            <div
              className="center-flex gap-2"
              onClick={() => setOptions(!options)}
            >
              <div className="w-[30px] h-[30px] text-[#fff] bg-[#FF0000] rounded-full center-flex cursor-pointer">
                <p className="uppercase">{userDetails?.companyName?.[0]}</p>
              </div>
              <button className="">
                <img
                  src="/images/dropdown.svg"
                  alt=""
                  className={`${options && "scale-y-[-1]"} transition-all ease-in-out`}
                />
              </button>
            </div>

            {options && (
              <div className="bg-[#fff] absolute -bottom-32 -left-[100px] flex flex-col shadow-md text-left w-[200px] text-sm
              transition-all ease-in-out ">
                <Link to="/dashboard/profile" className="w-full border-b border-b-[#D4D6D7] py-[10px] px-5 text-left">
                  Account
                </Link>
                <button className=" border-b border-b-[#D4D6D7] py-[10px] px-5 text-left">
                  Add Collaborators
                </button>
                <button
                  className=" border-b border-b-[#D4D6D7] py-[10px] px-5 text-left"
                  onClick={() => logOut()}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};
export default RecuiterLayout;
