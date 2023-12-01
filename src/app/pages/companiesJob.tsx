import React, { useEffect, useState } from "react";
import PageLayout from "../layout/layout";
import JobDetails from "../components/jobDetails";
import { useParams } from "react-router-dom";
import { getSingleJob } from "../services/jobs";

const CompaniesJob = () => {
  const { id } = useParams();
  const [job, setJob] = useState<any>()


  useEffect(() => {
    if (id) {
        getJob()
      }
  }, [id])
  console.log(id)
  const getJob = async() => {
    try {
      const data = await getSingleJob(id!)
      console.log(data?.data?.job)
      setJob(data?.data?.job);
    }
    catch (e) {
      return e
    }
  }
  console.log(job)
   return (
    <PageLayout pageName="jobs">
      <div className="pt-[40px] px-4  xl:px-[92px]">
        <JobDetails pageName="singleJob" job={job} />
      </div>
    </PageLayout>
  );
};

export default CompaniesJob;
