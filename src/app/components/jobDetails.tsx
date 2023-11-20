import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const JobDetails: React.FC<{ pageName?: string; job?: any }> = ({
  pageName,
  job,
}) => {
  const [filteredJob, setFilteredJob] = useState<any>();
  useEffect(() => {
    if (job) {
      setFilteredJob(job[0]);
    }
  }, [job]);
  return (
    <div
      className={`w-full text-[#000]  flex-col  gap-y-10 font-roboto md:bg-[#fff] rounded-[20px] ${
        pageName === "singleJob" ? "px-[86px]" : " px-2 md:px-6 lg:px-12"
      } py-8 `}
    >
      <div className="between-flex mb-10">
        <div className="">
          <h3 className="text-lg md:lg-text font-bold  text-[#2864FF] font-roboto text-[1.53rem] leading-6 md:leading-[2.25rem]">
            {/* Software Engineer{" "} */}
            {filteredJob && filteredJob?.title}
          </h3>
          <div className="between-flex gap-3">
            <p className=" text-sm md:md-text mb-1 font-lato">
              {/* Consulting Ltd */}
              {filteredJob && filteredJob?.user.companyName}
            </p>
            <div className="bg-[#A8ADAF] h-[8px] w-[8px] rounded-full"></div>
            <p className="text-xs md:sm-text rounded-[5px] text-[#2E7D31] bg-[#E9FFEF] py-2 px-4 md:px-8">
              {filteredJob && filteredJob.mode}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <div className="w-[17px] md:w-auto">
            <img src="/images/apply_icon.svg" alt="" className="" />
          </div>
          {filteredJob?.status === "open" ? (
            <Link
              to={`/jobs/${filteredJob._id}`}
              className="blue-button h-[40px] px-4 md:px-8 text-xs md:text-base flex items-center"
            >
              Apply
            </Link>
          ) : (
            <button
              disabled
              className="bg-[rgba(40,100,255,0.5)] text-[#fff] rounded-[0.5rem] h-[40px] px-4 md:px-8 text-xs md:text-base"
            >
              Apply
            </button>
          )}
        </div>
      </div>

      <div className="bg-[#fff] rounded-[10px] pt-2 pb-8 p-4 shadow-[0px_4px_8px_0_rgba(171,190,209,0.4)] mb-4 md:mb-10">
        <p
          className={`bg-[#E9EFFF] rounded-[5px] px-3 md:px-[1.875rem] py-2 text-[#2864FF] mb-3 w-auto mt-4 md:mt-0 text-base md:md-text
                   font-medium inline-block `}
        >
          Description
        </p>

        <p
          className={` ${
            pageName === "singleJob" ? "md-text " : "sm-text"
          } text-[#263238]   font-normal mt-2 font-lato text-justify `}
        >
          {filteredJob && filteredJob.description}
        </p>
      </div>

      <div className="bg-[#fff] rounded-[10px] pt-2 pb-8 p-4 shadow-[0px_4px_8px_0_rgba(171,190,209,0.4)] mb-4 md:mb-10">
        <p
          className={` ${
            pageName === "singleJob"
              ? "text-base md:text-[31px] leading-[24px] md:leading-[48px] "
              : "text-base md:md-text"
          } bg-[#E9EFFF] rounded-[5px] px-3 md:px-[1.875rem] py-2 text-[#2864FF] mt-4 md:mt-0 w-auto
                   font-medium inline-block`}
        >
          Responsibilities
        </p>

        <ul
          className={` ${
            pageName === "singleJob" ? "job-text " : "sm-text"
          } text-[#263238]  font-normal mt-2 font-lato text-justify list-disc pl-8 flex flex-col gap-4`}
        >
          {filteredJob &&
            filteredJob.responsibility.split("\n").map((item: any) => {
              return (
                <li className="" key={item}>
                  {item}
                </li>
              );
            })}
        </ul>
      </div>

      <div className="bg-[#fff] rounded-[10px] pt-2 pb-8 p-4 shadow-[0px_4px_8px_0_rgba(171,190,209,0.4)] mb-4 md:mb-10">
        <p
          className={` ${
            pageName === "singleJob"
              ? "text-base md:text-[31px] leading-[24px] md:leading-[48px] "
              : "text-base md:md-text"
          } bg-[#E9EFFF] rounded-[5px] px-3 md:px-[1.875rem] py-2 text-[#2864FF] mt-4 md:mt-0 w-auto
                   font-medium inline-block`}
        >
          Requirements
        </p>

        <ul
          className={` ${
            pageName === "singleJob" ? "job-text " : "sm-text"
          }  text-[#263238]  font-normal mt-2 font-lato text-justify list-disc pl-8 flex flex-col gap-4`}
        >
          {filteredJob &&
            filteredJob.requirements.split(",").map((item: any) => {
              return (
                <li className="" key={item}>
                  {item}
                </li>
              );
            })}
        </ul>
      </div>
      <div className="bg-[#fff] rounded-[10px] pt-2 pb-8 p-4 shadow-[0px_4px_8px_0_rgba(171,190,209,0.4)] mb-10">
        <p
          className={` ${
            pageName === "singleJob"
              ? "text-base md:text-[31px] leading-[24px] md:leading-[48px] "
              : "text-base md:md-text"
          } bg-[#E9EFFF] rounded-[5px] px-3 md:px-[1.875rem] py-2 text-[#2864FF] mt-4 md:mt-0 w-auto
                   font-medium inline-block`}
        >
          Salary
        </p>
        <p
          className={` ${
            pageName === "singleJob" ? "job-text " : "sm-text"
          } text-[#263238]   font-normal mt-2 font-lato text-justify `}
        >
          {filteredJob && filteredJob.salary}
        </p>
      </div>

      <div className="mx-auto text-center mb-10">
        <button
          className={` ${
            pageName === "singleJob"
              ? "px-12  h-[60px] text-[24px] font-roboto font-medium "
              : "px-8  h-[40px]"
          } blue-button  `}
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default JobDetails;
