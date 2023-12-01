import moment from "moment";
import React, { useEffect, useState } from "react";

const MapJobs: React.FC<{
  pageName?: string;
  jobs?: any;
  jobId?: any;
  view?: any;
}> = ({ pageName, jobs, jobId }) => {
  const [view, setView] = useState<string>("");
  const sendId = (id: string) => {
    jobId(id);
  };

  useEffect(() => {
    if (pageName === "recruiterJobs") {
      setView(jobs[0]._id);
    }
  }, [jobs]);

  return (
    <div
      className={` between-flex text-[#000] flex-col w-full ${
        pageName === "recruiterJobs" ? "mt-0" : "mt-[50px]"
      }   gap-y-10 font-roboto`}
    >
      {jobs.map((item: any) => {
        return (
          <button
            key={item._id}
            onClick={() => {
              sendId(item._id);
              setView(item._id);
            }}
            className={` bg-[#fff] rounded-[20px] py-8 pl-4  pr-8 flex items-center gap-x-8 transition-all ease-in-out text-left w-full ${
              view === item._id
                ? "border-[1px] border-[#2864FF] "
                : "shadow-[2px_2px_24px_0_rgba(171,190,209,0.4)]"
            } `}
          >
            {!view && (
              <div
                className={` ${
                  pageName === "recruiterJobs" ? "hidden" : "hidden md:block"
                } `}
              >
                <div className="w-[100px] h-[100px] bg-[#7d8488] rounded-full flex justify-center items-center">
                  <p className="text-6xl font-bold font-lato text-[#000]  uppercase">
                    {item.user.companyName[0]}
                  </p>
                </div>
                {/* <img src={item.user.avatar.url} alt="" className="" /> */}
              </div>
            )}

            <div className="w-full">
              <div
                className={` ${
                  pageName === "recruiterJobs"
                    ? "top-items-flex"
                    : "between-flex"
                } `}
              >
                <div className="flex gap-3 items-center">
                  <div className="w-8 md:hidden">
                    <img src={item.user.avatar.url} alt="" className="" />
                  </div>

                  <div className="w-full">
                    <div className="flex justify-between items-center">
                      <p className="sm-text md:md-text mb-1 font-lato firstWord">
                        {item.user.companyName}
                      </p>
                      <p className="text-xs rounded-[5px] text-[#2E7D31] bg-[#E9FFEF] py-2 px-4 md:hidden">
                        {item.status}
                      </p>
                    </div>

                    <div className="flex justify-between items-center">
                      <p className=" md-text md:lg-text font-semibold  text-[#2864FF] font-inter firstWord">
                        {item.title}
                        <span className="text-[#7D8488] text-sm font-normal pl-[10px] hidden md:inline">
                          {item.mode}
                        </span>
                      </p>
                      <p className="text-[#7D8488] text-xs font-normal pl-[10px] md:hidden">
                        {item.mode}
                      </p>
                    </div>
                  </div>
                </div>

                <p className="sm-text rounded-[5px] text-[#2E7D31] bg-[#E9FFEF] py-2 px-3 lg:px-8 hidden md:block">
                  {item.status}
                </p>
              </div>

              <p
                className={`${
                  view ? "w-[95%]" : "w-[85%]"
                } text-[#515B60] sm-text  font-normal mt-4 md:mt-2 firstWord `}
              >
                {pageName === "recruiterJobs"
                  ? item.description.slice(0, 100)
                  : item.description}
              </p>
              <div
                className={`${
                  view ? "flex-wrap" : ""
                } flex justify-between gap-2 items-start md:items-center flex-wrap flex-col md:flex-row`}
              >
                <div
                  className={`${
                    view ? "gap-2" : "gap-y-2 gap-x-6"
                  } flex flex-wrap my-2`}
                >
                  {item.requirements.split(",").map((item: any) => {
                    return (
                      <p
                        key={item}
                        className={`${
                          view ? "" : ""
                        } bg-[#E9EFFF] rounded-[5px] px-4 lg:px-[1.875rem] py-1 lg:py-2 text-[#7D8488] sm-text`}
                      >
                        {item}
                      </p>
                    );
                  })}
                </div>
                <div
                  className={`${view ? "gap-6" : "gap-12"} flex items-center`}
                >
                  {/* <div
                    className={` text-[#515B60] text-xs md:text-base font-medium flex gap-2 items-center`}
                  >
                    <img
                      src="/images/location.svg"
                      alt=""
                      className="w-4 md:w-auto"
                    />
                    <p className="">{item.location}</p>
                  </div> */}
                  <p className="text-[#515B60] text-xs md:text-base font-medium">
                    Date Posted:
                    <span className="font-normal">
                      {moment(item.createdAt).format("Do MMM, YYYY")}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default MapJobs;
