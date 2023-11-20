import React from "react";
import PageLayout from "../layout/layout";
import JobDetails from "../components/jobDetails";

const CompaniesJob = () => {
  return (
    <PageLayout>
      <div className="pt-[40px] px-4  xl:px-[92px]">
        <JobDetails pageName="singleJob" />
      </div>
    </PageLayout>
  );
};

export default CompaniesJob;
