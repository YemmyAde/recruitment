import React, { useEffect, useState } from "react";
import RecuiterLayout from "../../layout/recuiterLayout";
import { ICreate } from "../../../interfaces/ICreateJob";

const CreateJob = () => {
  const [step, setStep] = useState<number>(1);
  const [createJob, setCreateJob] = useState<ICreate>({
    title: "",
    description: "",
    responsibility: "",
    requirements: "",
    salary: "",
    status: "",
    mode: "",
    interviewType: "",
  });

  const handleCreateJob = (e: any) => {
    const { name, value } = e.target;
    setCreateJob({
      ...createJob,
      [name]: value
    })
  };
  const handleNext = () => {
    if (step <= 3) {
      setStep(step + 1);
    }
  };
  return (
    <RecuiterLayout>
      <div className="px-4  xl:px-[92px] py-16">
        <div className="relative text-center ">
          <p className="absolute right-0 top-0 font-lato text-[#2E7D31] sm-text">
            Step {step}/3
          </p>
          <h1 className="font-semibold text-4xl text-[#000]">
            Create a new Job
          </h1>
          <p className="xl-text text-[#A8ADAF] font-normal mt-2">
            Fill in details to create your job and add all necessary job details
          </p>
        </div>

        <div className="w-[70%] max-w-[800px] mx-auto mt-28">
          {step === 1 ? (
            <div className="">
              <label htmlFor="" className="!text-left text-[#000] xl-text ">
                Job Title
              </label>
              <br />
              <input
                type="text"
                className="form-input  text-[#000] placeholder:text-[#A8ADAF]"
                placeholder="e.g Senior software developer"
                name="title"
                value={createJob.title}
              />
            </div>
          ) : step === 2 ? (
            <div className=" ">
              <div className="">
                <label htmlFor="" className="!text-left text-[#000] xl-text ">
                  Job Description
                </label>
                <br />
                <textarea
                  name=""
                  id=""
                  className="form-input text-[#000] placeholder:text-[#A8ADAF] resize-none h-[190px]"
                  placeholder="Type in here"
                ></textarea>
              </div>
              <div className="mt-4">
                <label htmlFor="" className="!text-left text-[#000] xl-text ">
                  Job Responsibility
                </label>
                <br />
                <textarea
                  name=""
                  id=""
                  className="form-input text-[#000] placeholder:text-[#A8ADAF] resize-none h-[190px]"
                  placeholder="Type in here"
                ></textarea>
              </div>
              <div className="mt-4">
                <label htmlFor="" className="!text-left text-[#000] xl-text ">
                  Job Requirements
                </label>
                <br />
                <textarea
                  name=""
                  id=""
                  className="form-input text-[#000] placeholder:text-[#A8ADAF] resize-none h-[190px]"
                  placeholder="Type in here"
                ></textarea>
              </div>
              <div className="mt-4">
                <label htmlFor="" className="!text-left text-[#000] xl-text ">
                  Salary
                </label>
                <br />
                <textarea
                  name=""
                  id=""
                  className="form-input text-[#000] placeholder:text-[#A8ADAF] resize-none h-[80px]"
                  placeholder="Type in here"
                ></textarea>
              </div>
            </div>
          ) : (
            step === 3 && (
              <div>
                <div className="">
                  <label htmlFor="" className="!text-left text-[#000] xl-text ">
                    Interview type
                  </label>
                  <br />
                  <input
                    type="text"
                    className="form-input  text-[#000] placeholder:text-[#A8ADAF]"
                    placeholder="e.g Senior software developer"
                  />
                </div>
                <div className="mt-4">
                  <label htmlFor="" className="!text-left text-[#000] xl-text ">
                    Job Mode
                  </label>
                  <br />
                  <input
                    type="text"
                    className="form-input  text-[#000] placeholder:text-[#A8ADAF]"
                    placeholder="e.g Senior software developer"
                  />
                </div>
              </div>
            )
          )}
        </div>
        <div className="text-center mx-auto mt-16">
          <button
            onClick={handleNext}
            className="bg-[#102866] text-[#fff] rounded-[10px] py-[10px] px-16 text-base  "
          >
            Proceed
          </button>
        </div>
      </div>
    </RecuiterLayout>
  );
};

export default CreateJob;
