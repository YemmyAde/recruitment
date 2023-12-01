import React, { useState } from "react";
import RecuiterLayout from "../../layout/recuiterLayout";
import { Link, useNavigate } from "react-router-dom";

const ViewCandidate = () => {
  const navigate = useNavigate()
  const [feedback, setFeedback] = useState<string>("application");
  return (
    <RecuiterLayout>
      <div className="px-4  xl:px-[92px] pt-6 pb-12 bg-[#f7f6f7] ">
        <button
         onClick={() => navigate(-1)}
          className="text-[#000] sm-text font-lato flex items-center gap-3 mt-4"
        >
          <img src="/images/back_arrow.svg" alt="" className="" /> Back
        </button>

        <div className="mt-16 between-flex flex-wrap gap-y-8">
          <div className="flex items-center gap-4 font-lato">
            <p className="bg-[#2864FF] w-[40px] h-[40px] md:w-[70px] md:h-[70px] rounded-full center-flex text-[30px] sm:text-[60px] text-[#fff]">
              K
            </p>
            <p className="text-sm md:text-lg">
              Kelvin <br />
              Gold
            </p>
          </div>
          <div className="bg-[#f4f4f4] w-full md:w-[500px] lg:w-[650px] rounded-[10px] p-4 md:py-[25px] md:px-[35px]  flex gap-x-8 border-[1px] border-[#A8ADAF] text-left between-flex">
            <div className="flex items-start justify-start md:justify-between md:items-center mt-2 gap-6 flex-col md:flex-row">
              <p className=" text-base font-bold  text-[#2864FF] font-roboto">
                Senior Software Engineer
              </p>
              <p className="text-[9px] leading-[13px] font-lato rounded-[5px] text-[#2E7D31] bg-[#E9FFEF] py-2 px-4 md:px-8">
                Remote
              </p>
            </div>
            <div className="between-flex flex-col gap-6 pr-4 font-bold text-xs text-[#000]">
              <p className="center-flex w-[50px] h-[50px] bg-[#cdcccd] rounded-full ">
                40%
              </p>
              <p className="">Score</p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <div className="flex justify-between md:justify-start gap-2 md:gap-16 border-b-[#A8ADAF] border-b-[1px] pb-2 px-2 mb-12 font-lato">
            <button
              onClick={() => setFeedback("application")}
              className={`${
                feedback === "application"
                  ? "text-[#2864FF] font-bold"
                  : "text-[#A8ADAF]"
              } text-[10px] md:text-sm `}
            >
              Application Feedback
            </button>
            <button
              onClick={() => setFeedback("interview")}
              className={`${
                feedback === "interview"
                  ? "text-[#2864FF] font-bold"
                  : "text-[#A8ADAF]"
              } text-[10px] md:text-sm `}
            >
              Interview Report
            </button>
            <button
              onClick={() => setFeedback("video")}
              className={`${
                feedback === "video"
                  ? "text-[#2864FF] font-bold"
                  : "text-[#A8ADAF]"
              } text-[10px] md:text-sm `}
            >
              Video
            </button>
          </div>

          {feedback === "application" ? (
            <div className="">
              <h2 className="text-[#000] text-2xl md:text-4xl font-bold font-roboto">
                Here is a feedback to the form filled
              </h2>
            </div>
          ) : feedback === "interview" ? (
            <div className="">
              <h2 className="text-[#000] text-2xl md:text-4xl font-bold font-roboto">
                Here is a recording to her session
              </h2>
            </div>
          ) : (
            feedback === "video" && (
              <div className="">
                <h2 className="text-[#000] text-2xl md:text-4xl font-bold font-roboto">
                  Here is a recording to her session
                </h2>
              </div>
            )
          )}
        </div>
      </div>
    </RecuiterLayout>
  );
};

export default ViewCandidate;
