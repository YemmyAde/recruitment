import React, { useEffect, useState } from "react";
import PageLayout from "../layout/layout";
import { jobsSample } from "../utils/data";
import JobDetails from "../components/jobDetails";
import MapJobs from "../components/mapJobs";
import { allJobs, getRecruiter } from "../services/jobs";
import Loader from "../components/loader";

const Jobs = () => {
  const [show, setShow] = useState<boolean>(false);
  const [jobs, setJobs] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [jobId, setJobId] = useState<any>("");
  const [filtered, setFiltered] = useState<any>([]);

  const [search, setSearch] = useState<{ title: string; category: string }>({
    title: "",
    category: "",
  });

  const handleSearch = (e: any) => {
    const { name, value } = e.target;
    setSearch({
      ...search,
      [name]: value,
    });
  };
  const matchingResults = jobs.filter((item: any) => {
    return (
      item.title.toLowerCase().includes(search.title.toLowerCase()) &&
      item.mode.toLowerCase().includes(search.category.toLowerCase())
    );
  });

  const getJobs = async () => {
    setLoading(true);
    try {
      const res = await allJobs();
      setJobs(res.data.jobs);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  };

  useEffect(() => {
    getJobs();
  }, []);

  const getId = (data: string) => {
    setJobId(data);
  };

  useEffect(() => {
    const copyJobs = [...jobs];
    const findJob = copyJobs.filter((item) => {
      return item._id === jobId;
    });
    setFiltered(findJob);
  }, [jobId]);

  return (
    <PageLayout pageName="jobs">
      <div className="md:pt-[60px] pb-[100px] px-4  xl:px-[92px] min-h-[calc(100vh-120px)]">
        {/* Search */}

        {loading ? (
          <Loader />
        ) : (
          <>
            <div className="flex gap-4 lg:gap-10 items-start">
              <div
                className={` ${
                  Boolean(jobId)
                    ? "hidden md:block lg:min-w-[500px] w-[40%]"
                    : "w-[100%]"
                }  `}
              >
                <div
                  className={` bg-[#fff] rounded-[10px] py-4 md:py-[27px] ${
                    Boolean(jobId) ? "pl-4 gap-3" : "pl-3 md:pl-[35px] gap-6"
                  } pr-[10px] between-flex  text-[#000]
        shadow-[0_6px_12px_0_rgba(171,190,209,0.3)] `}
                >
                  <input
                    type="text"
                    className="bg-[#f9fbff] placeholder:text-[#A8ADAF] sm-text rounded py-4 px-4 flex-1"
                    placeholder="Search with Keyword or job title"
                    name="title"
                    value={search.title}
                    onChange={handleSearch}
                  />
                  {!Boolean(jobId) && (
                    <>
                      {/* <input
                        type="text"
                        className="bg-[#f9fbff] placeholder:text-[#A8ADAF] sm-text rounded py-4 px-4 w-[190px]"
                          placeholder="City or Country"
                          name="country"
                          value={search.country}
                      /> */}
                      <input
                        type="text"
                        className="bg-[#f9fbff] placeholder:text-[#A8ADAF] sm-text rounded py-4 px-4 hidden md:block flex-1"
                        placeholder="Category"
                        name="category"
                        value={search.category}
                        onChange={handleSearch}
                      />
                    </>
                  )}
                  {/* {Boolean(jobId) && (
                    <img src="./images/sort.svg" alt="" className="" />
                  )} */}
                  <button className="blue-button h-[50px] px-6 lg:px-14">
                    Search
                  </button>
                </div>
                {search.title || search.category ? (
                  <MapJobs jobs={matchingResults} jobId={getId} />
                ) : (
                  <MapJobs jobs={jobs} jobId={getId} />
                )}
              </div>
              <div className={`${jobId && "w-full"}`}>
                {jobId && (
                  <div>
                    <button
                      onClick={() => setJobId("")}
                      className="text-[#000] sm-text font-lato flex items-center gap-3 mt-4 md:hidden"
                    >
                      <img src="/images/back_arrow.svg" alt="" className="" />{" "}
                      Back
                    </button>
                    <div className="">
                      <JobDetails job={filtered} />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* <div className="mx-auto text-center mt-14">
              <button className="bg-[#fff] text-[#2864FF] hover:text-[#fff] hover:bg-[#2864FF] border-[1px] border-[#2864FF] rounded-[0.5rem] py-[10px] px-[40px] md-text transition-all ease-in-out ">
                Show More jobs
              </button>
            </div> */}
          </>
        )}
      </div>
    </PageLayout>
  );
};

export default Jobs;
