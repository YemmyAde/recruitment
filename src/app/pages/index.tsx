import React, { useEffect } from "react";
import PageLayout from "../layout/layout";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const Landing = () => {
  useEffect(() => {});
  return (
    <PageLayout pageName="index">
      <div className="md:pt-[60px] pb-[100px] ">
        <div className="md:flex justify-between shadow-[0_6px_12px_0_rgba(171,190,209,0.3)] px-4  xl:px-[92px] pb-[50px]">
          <div className="w-full md:flex-1">
            <h1 className="text-[#424E3E] font-medium text-[27px] md:text-[40px] leading-[40px] md:leading-[50px]  font-roboto mb-8 text-center md:text-left">
              RecruitN seamlessly merges talent, enhancing hiring with advanced
              AI interviews for innovation
            </h1>

            <p className="text-[#515B60] text-lg font-lato w-[80%] md:w-[300px] lg:w-[480px] mx-auto md:mx-0 text-center md:text-left">
              Locate, employ, integrate, and oversee the perfect candidate for
              any role.
            </p>
            <div
              className="text-[18px] leading-[28px] md:sm-text hidden md:flex gap-x-4 lg:gap-x-8 items-start md:items-center flex-col md:flex-row 
           gap-y-6 md:gap-y-0 mt-2 "
            >
              <Link
                to="/register"
                className="md:bg-[#2864FF] md:text-[#fff] rounded-[10px] md:py-[6px] lg:py-[11px] md:px-[10px] lg:px-[20px]"
              >
                Create account
              </Link>

              <Link
                to="/jobs"
                className="bg-[#fff] md:text-[#2864FF] md:border-[1px] md:border-[#2864FF] rounded-[10px] md:py-[5px]
               lg:py-[10px] md:px-[10px] lg:px-[30px]"
              >
                Find Jobs
              </Link>
            </div>
          </div>
          <div className="w-full md:flex-1 mt-6 md:mt-0">
            <img src="/images/hero.svg" alt="" className="" />
            <div
              className="text-[18px] leading-[28px] md:sm-text flex  md:hidden gap-x-4 lg:gap-x-8 items-start md:items-center flex-col md:flex-row 
           gap-y-6 md:gap-y-0 mt-2  text-center"
            >
              <Link
                to="/jobs"
                className="bg-[#fff] text-[#2864FF] border-[1px] border-[#2864FF] rounded-[10px] w-full py-4"
              >
                Find Jobs
              </Link>

              <Link
                to="/register"
                className="bg-[#2864FF] text-[#fff] w-full rounded-[10px] py-4"
              >
                Create account
              </Link>
            </div>
          </div>
        </div>

        <div className="md:flex justify-between px-4  xl:px-[92px] pb-[50px] mt-12 items-center gap-[5%] ">
          <div className="w-full md:flex-1 mt-6 md:mt-0 flex justify-center !order-1 md:order-1">
            <img src="/images/recruiter.svg" alt="" className="" />
          </div>
          <div className="w-full md:flex-1 !order-1 md:order-2">
            <h1 className="text-[#000] font-medium text-[27px] md:text-[40px] leading-[40px] md:leading-[50px]  font-roboto mb-8 text-center md:text-left">
              Why Recruiters Prefer Recruitn
            </h1>

            <p className="text-[#4F4A4A] text-2xl font-roboto w-[80%] md:w-full mx-auto md:mx-0 text-center md:text-left">
              Recruitn is the top choice for recruiters with its efficient AI
              matching and powerful data analytics.
            </p>
            <div
              className="text-[18px] leading-[28px] md:sm-text hidden md:flex gap-x-4 lg:gap-x-8 items-start md:items-center flex-col md:flex-row 
           gap-y-6 md:gap-y-0 mt-8 "
            >
              <Link
                to="/register"
                className="md:bg-[#2864FF] md:text-[#fff] rounded-[10px] md:py-[6px] lg:py-[11px] md:px-[10px] lg:px-[20px]"
              >
                Create account
              </Link>
            </div>
          </div>
        </div>
        <div className="md:flex justify-between px-4  xl:px-[92px] pb-[50px] mt-12 items-center gap-[5%]">
          <div className="w-full md:flex-1">
            <h1 className="text-[#000] font-medium text-[27px] md:text-[40px] leading-[40px] md:leading-[50px]  font-roboto mb-8 text-center md:text-left">
              Why Recruiters Prefer Recruitn
            </h1>

            <p className="text-[#4F4A4A] text-2xl font-roboto w-[80%] md:w-full mx-auto md:mx-0 text-center md:text-left">
              An AI interviewer that conducts live, conversational interviews
              and gives real-time evaluations to effortlessly identify top
              performers. Say goodbye to manual screening and hello to smarter
              recruiting.
            </p>
            <div
              className="text-[18px] leading-[28px] md:sm-text hidden md:flex gap-x-4 lg:gap-x-8 items-start md:items-center flex-col md:flex-row 
           gap-y-6 md:gap-y-0 mt-8 "
            >
              <Link
                to="/jobs"
                className="bg-[#fff] md:text-[#2864FF] md:border-[1px] md:border-[#2864FF] rounded-[10px] md:py-[5px]
               lg:py-[10px] md:px-[10px] lg:px-[30px]"
              >
                Find Jobs now
              </Link>
            </div>
          </div>

          <div className="w-full md:flex-1 mt-6 md:mt-0 flex justify-center">
            <img src="/images/jobs.svg" alt="" className="" />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Landing;
