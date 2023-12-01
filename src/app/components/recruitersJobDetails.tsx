import React, { useEffect, useRef, useState } from "react";
import { closeJob, openJob } from "../services/jobs";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const RecruitersJobDetails: React.FC<{
  pageName?: string;
  job: any;
  status: string;
  company: string;
  reloadJob?: any;
}> = ({ pageName, job, status, company, reloadJob }) => {
  const [filteredJob, setFilteredJob] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (job) {
      setFilteredJob(job[0]);
    }
  }, [job]);

  const handleOpenJob = async (id: string) => {
    setLoading(true);
    try {
      const data = await openJob(id);
      if (data) {
        toast.success(data?.data?.message);
        reloadJob("closeJob");
      }
    } catch (e) {
      setLoading(false);
      return e;
    }
  };
  const handleCloseJob = async (id: string) => {
    setLoading(true);

    try {
      const data = await closeJob(id);
      if (data) {
        reloadJob("closeJob");
        toast.success(data?.data?.message);
      }
      setLoading(false);
    } catch (e) {
      setLoading(false);
      return e;
    }
  };
  return (
    <div
      className={`w-full text-[#000]  flex-col  gap-y-10 font-roboto bg-[#fff] rounded-[20px] ${
        pageName === "singleJob" ? "px-[86px]" : "  px-12"
      } py-8  `}
    >
      <div className="between-flex mb-10">
        <div className="">
          <h3 className="lg-text font-bold  text-[#263238] font-roboto md-text">
            {filteredJob && filteredJob?.title}
          </h3>
          <div className="between-flex gap-4 mt-2">
            <p className="md-text mb-1 font-lato">
              {" "}
              {filteredJob && filteredJob?.user.companyName}
            </p>
            <div className="bg-[#A8ADAF] h-[8px] w-[8px] rounded-full"></div>
            <p className="sm-text rounded-[5px] text-[#2E7D31] bg-[#E9FFEF] py-2 px-8">
              {filteredJob && filteredJob.mode}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <img src="/images/apply_icon.svg" alt="" className="" />
          <p className="sm-text rounded-[5px] text-[#2E7D31] bg-[#E9FFEF] py-2 px-8 font-bold font-lato">
            {filteredJob && filteredJob.status}
          </p>
        </div>
      </div>

      <div className="bg-[#E9EFFF] rounded-[10px] px-[27px] py-8 mb-10">
        <p
          className={`bg-[#fff] rounded-[5px] px-[1.875rem] py-2 text-[#263238] mb-3 w-auto md-text
                   font-medium inline-block`}
        >
          Job Details
        </p>

        <p
          className={` text-[#263238]   font-normal mt-2 font-lato text-justify text-[0.93rem] leading-[1.25rem]`}
        >
          {filteredJob && filteredJob.description}
        </p>
      </div>

      <div className="bg-[#fff] rounded-[10px] px-[27px] py-8 mb-10 border-[1px] border-[#A8ADAF]">
        <div className="between-flex mb-3">
          <p
            className={`bg-[#fff] rounded-[5px] text-[#263238] w-auto md-text
                   font-medium inline-block`}
          >
            Job link for your candidate
          </p>
          <button className="bg-[#E9EFFF] rounded-[5px] px-[1.875rem] py-3 text-[#263238] text-[9px] leading-[13px] ">
            <img src="/images/copy.svg" alt="" className="inline mr-2" />
            Copy Link
          </button>
        </div>
        <a
          href={`/jobs/${company}/${filteredJob?._id}`}
          target="_blank"
          className="text-[#2864FF] font-lato text-xs leading-[0.8125rem]"
        >
          {`/jobs/${company}/${filteredJob?._id}`}
          {/* https./interview.ai.recruitn/7654366778fjfghkhkfxw35eryyoivxdggdffsygoyuiTWFUFRTDKJWLywitrujbkjl/b/jobs */}
        </a>
      </div>

      <div className="flex items-end justify-between mb-10">
        <div className="bg-[#E9EFFF] rounded-[10px] p-5  w-[270px]">
          <div className="flex items-center gap-4">
            <img src="/images/candidates.svg" alt="" className="" />
            <p className="md-text text-[#000] font-medium ">
              Candidates Applied
            </p>
          </div>
          <h3 className="text-8xl text-[#000] font-medium text-center my-6">
            {filteredJob && filteredJob.applicants.length}
          </h3>
          <Link
            to={`/dashboard/job_result/${filteredJob?._id}`}
            className="text-[#2864FF]  underline"
          >
            View all
          </Link>
        </div>
        {status === "open" ? (
          <button
            onClick={() => handleCloseJob(filteredJob?._id)}
            className={`  text-[12px] font-roboto font-medium   `}
          >
            {loading ? "Closing Job..." : "Close Job"}
          </button>
        ) : (
          <button
            onClick={() => handleOpenJob(filteredJob?._id)}
            className={`  text-[12px] font-roboto font-medium   `}
          >
            {loading ? "Opening Job..." : "Open Job"}
          </button>
        )}
      </div>
    </div>
  );
};

export default RecruitersJobDetails;
