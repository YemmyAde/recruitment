import React, { useEffect, useState } from "react";
import RecuiterLayout from "../../layout/recuiterLayout";
import { Link } from "react-router-dom";
import MapJobs from "../../components/mapJobs";
import RecruitersJobDetails from "../../components/recruitersJobDetails";
import { companyJobs, getRecruiter } from "../../services/jobs";
import Loader from "../../components/loader";

const RecruiterJobs = () => {
  const [closed, setClosed] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [jobs, setJobs] = useState<any>([]);
  const [jobId, setJobId] = useState<any>("");
  const [filtered, setFiltered] = useState<any>([]);
  const [openJobs, setOpenJobs] = useState<any>([]);
  const [closedJobs, setClosedJobs] = useState<any>([]);
  const [page, setPage] = useState<number>(1);
  const [userData, setUserData] = useState<any>();

  const user = JSON.parse(localStorage.getItem("recruitnUser")!);
  useEffect(() => {
    if (user) {
      setUserData(user?.data?.user);
    }
  }, []);


  useEffect(() => {
    getJob()
  }, [])

  const getJob = async () => {
    setLoading(true);
    try {
      const res = await companyJobs(page);
      setJobs(res.data.jobs);
      if (res.data.jobs) {
        const filterOpen = res.data.jobs.filter((item: any) => {
          return item.status === "open";
        });
        const filterClosed = res.data.jobs.filter((item: any) => {
          return item.status === "closed";
        });
        setOpenJobs(filterOpen);
        setClosedJobs(filterClosed);
      }
      setLoading(false);
    } catch (e) {
      setLoading(false);

      return e;
    }
  };

  const reloadJob = (job: string) => {
    if (job === "closedJob") {
      setClosed(true);
    } else {
      getJob();
    }
  };
  const getId = (data: string) => {
    setJobId(data);
  };

  useEffect(() => {}, []);

  useEffect(() => {
    if (closed) {
      setJobId(closedJobs[0]?._id);
      setFiltered(closedJobs[0]);
    } else {
      setJobId(openJobs[0]?._id);
      setFiltered(openJobs[0]);
    }
  }, [openJobs, closedJobs, closed]);

  useEffect(() => {
    if (closed && closedJobs) {
      const findJob = [...closedJobs].filter((item) => {
        return item._id === jobId;
      });
      setFiltered(findJob);
    } else if (!closed && openJobs) {
      const findJob = [...openJobs].filter((item) => {
        return item._id === jobId;
      });
      setFiltered(findJob);
    }
  }, [jobId, openJobs, closedJobs]);

  

  return (
    <RecuiterLayout>
      <div className="px-4  xl:px-[92px] pt-6 pb-12 bg-[#f7f6f7]">
        <div className=" ">
          <h1 className="h1-text font-bold">My Jobs</h1>
          <div className="bg-[#E9EFFF] rounded-[10px] inline-block px-1 py-3 sm:p-3 mt-4">
            <button
              onClick={() => setClosed(false)}
              className={`${
                !closed
                  ? "bg-[#102866] text-[#fff] rounded-[0.5rem] py-[5px] sm:py-[11px]  px-[10px] sm:px-[40px] font-medium text-xs sm:text-base"
                  : "text-[#102866] mx-[20px] sm:mx-[40px] font-normal text-xs sm:text-[14px] sm:leading-[20px]"
              } `}
            >
              Open Jobs
            </button>
            <button
              onClick={() => setClosed(true)}
              className={`${
                closed
                  ? "bg-[#102866] text-[#fff] rounded-[0.5rem] py-[5px] sm:py-[11px] px-[10px] sm:px-[40px] font-medium text-xs sm:text-base"
                  : "text-[#102866] mx-[20px] sm:mx-[40px] font-normal text-xs sm:text-[14px] sm:leading-[20px]"
              } `}
            >
              Closed Jobs
            </button>
          </div>
        </div>
        {loading ? (
          <Loader />
        ) : (
          <div
            className={`${
              jobs.length > 0 ? "mt-2" : "mt-8 text-center"
            }   w-full `}
          >
            {closed ? (
              <div className="">
                {closedJobs?.length < 1 ? (
                  <div className="mx-auto text-center">
                    <div className="w-[100%] md:w-[725px] bg-[#E9EFFF] rounded-[20px] mx-auto pt-12 sm:pt-0 pb-12 mt-16 md:mt-0">
                      <img
                        src="/images/closed.svg"
                        alt=""
                        className="w-[100px] sm:w-[357px] inline-block md:mt-8"
                      />

                      <div className="">
                        <p className="text-[#A8ADAF] text-xs lg-text font-bold mt-6">
                          No job has been closed yet
                        </p>
                        <p className="text-[#263238] text-xs md:text-sm mt-5">
                          {" "}
                          You can go back to {` `}
                          <button
                            onClick={() => setClosed(false)}
                            className="text-[#2864FF]  underline"
                          >
                            Open jobs
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex gap-10 items-start mt-6">
                    <MapJobs
                      jobs={closedJobs}
                      jobId={getId}
                      pageName="recruiterJobs"
                    />
                    <RecruitersJobDetails
                      job={filtered}
                      status="closed"
                      company={userData?.companyName}
                      reloadJob={reloadJob}
                    />
                  </div>
                )}
              </div>
            ) : (
              !closed && (
                <div className="">
                  {openJobs?.length < 1 ? (
                    <div className="mx-auto text-center">
                      <div className="w-[100%] md:w-[725px] bg-[#E9EFFF] rounded-[20px] mx-auto pt-12 sm:pt-0 pb-12 mt-16 md:mt-0">
                        <img
                          src="/images/handshake.svg"
                          alt=""
                          className="w-[100px] sm:w-[357px] inline-block"
                        />
                        <div className="">
                          <h3 className="text-[#102866] font-bold text-base md:text-[24px] md:leading-[28px]">
                            Welcome, {userData?.companyName}
                          </h3>
                          <p className="text-[#A8ADAF] text-xs lg-text font-bold mt-1 md:mt-2">
                            No job has been Posted yet
                          </p>
                          <p className="text-[#263238] text-xs md:text-sm mt-2">
                            You can go to{" "}
                            <Link
                              to="/dashboard/create-job"
                              className="text-[#2864FF]  underline"
                            >
                              Add a Job
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex gap-10 items-start mt-6">
                      <MapJobs
                        jobs={openJobs}
                        jobId={getId}
                        pageName="recruiterJobs"
                      />
                      <RecruitersJobDetails
                        job={filtered}
                        status="open"
                        company={userData?.companyName}
                        reloadJob={reloadJob}
                      />
                    </div>
                  )}
                </div>
              )
            )}
          </div>
        )}
      </div>
    </RecuiterLayout>
  );
};

export default RecruiterJobs;
