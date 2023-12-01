import React, { useEffect, useState } from "react";
import RecuiterLayout from "../../layout/recuiterLayout";
import { ICreate } from "../../../interfaces/ICreateJob";
import { Link, useNavigate } from "react-router-dom";
import SuccessModal from "../../components/successModal";
import { createJobHR } from "../../services/jobs";

const CreateJob = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<number>(1);
  const [success, setSuccess] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [createJob, setCreateJob] = useState<ICreate>({
    title: "",
    description: "",
    responsibility: "",
    requirements: "",
    salary: "",
    status: "open",
    mode: "",
    interviewType: "",
  });

  const handleChange = (e: any) => {
    const { name, value, key } = e.target;

    if (name === "responsibility") {
      const updatedValue = key === "Enter" ? value + "\n" : value;
      setCreateJob({
        ...createJob,
        [name]: updatedValue,
      });
    } else if (name === "requirements") {
      const updatedValue = key === "Enter" ? value + "," : value;

      setCreateJob({
        ...createJob,
        [name]: updatedValue,
      });
    } else {
      setCreateJob({
        ...createJob,
        [name]: value,
      });
    }
  };

  const handleCreateJob = async () => {
    setLoading(true);
    try {
      const data = await createJobHR(createJob);
      if (data) {
        setSuccess(true);
        setLoading(false);

        setMessage(data?.data?.message)
      }
    } catch (e) {
      setLoading(false);

      return e;
    }
  };
  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const goBack = () => {
    if (step === 1) {
      navigate(-1);
    } else {
      setStep(step - 1);
    }
  };
  console.log(createJob);

  return (
    <RecuiterLayout>
      <button
        onClick={goBack}
        className="text-[#000] sm-text font-lato flex items-center gap-3 mt-4 pl-20 pt-3"
      >
        <img src="/images/back_arrow.svg" alt="" className="" /> Back
      </button>
      {success && (
        <SuccessModal
          img="/images/love.svg"
          heading="Congratulations"
          content={message}
          text2="You can go to"
          text3="Home"
          link="/dashboard"
        />
      )}
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
                onChange={handleChange}
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
                  name="description"
                  id=""
                  className="form-input text-[#000] placeholder:text-[#A8ADAF] resize-none h-[190px]"
                  placeholder="Type in here"
                  onChange={handleChange}
                  value={createJob.description}
                ></textarea>
              </div>
              <div className="mt-4">
                <label htmlFor="" className="!text-left text-[#000] xl-text ">
                  Job Responsibility
                </label>
                <br />
                <textarea
                  name="responsibility"
                  id=""
                  className="form-input text-[#000] placeholder:text-[#A8ADAF] resize-none h-[190px]"
                  placeholder="Type in here"
                  onChange={handleChange}
                  value={createJob.responsibility}
                ></textarea>
              </div>
              <div className="mt-4">
                <label htmlFor="" className="!text-left text-[#000] xl-text ">
                  Job Requirements
                </label>
                <br />
                <textarea
                  name="requirements"
                  id=""
                  className="form-input text-[#000] placeholder:text-[#A8ADAF] resize-none h-[190px]"
                  placeholder="Type in here"
                  onChange={handleChange}
                  value={createJob.requirements}
                ></textarea>
              </div>
              <div className="mt-4">
                <label htmlFor="" className="!text-left text-[#000] xl-text ">
                  Salary
                </label>
                <br />
                <textarea
                  name="salary"
                  id=""
                  className="form-input text-[#000] placeholder:text-[#A8ADAF] resize-none h-[80px]"
                  placeholder="Type in here"
                  onChange={handleChange}
                  value={createJob.salary}
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
                  <select
                    name="interviewType"
                    onChange={handleChange}
                    className="form-input  text-[#000] placeholder:text-[#A8ADAF] outline-none cursor-pointer"
                  >
                    <option value="">Select Interview Type</option>
                    <option value="cultural">Cultural</option>
                    <option value="technical">Technical</option>
                  </select>
                  {/* <input
                    type="text"
                    name="interviewType"
                    className=""
                    placeholder="e.g Senior software developer"
                    onChange={handleChange}
                    value={createJob.interviewType}
                  /> */}
                </div>
                <div className="mt-4">
                  <label htmlFor="" className="!text-left text-[#000] xl-text ">
                    Job Mode
                  </label>
                  <br />
                  <select
                    name="mode"
                    onChange={handleChange}
                    className="form-input  text-[#000] placeholder:text-[#A8ADAF] outline-none cursor-pointer"
                  >
                    <option value="">Select Job Mode</option>
                    <option value="remote">Remote</option>
                    <option value="hybrid">Hybrid</option>
                    <option value="onsite">On-site</option>
                  </select>
                </div>
              </div>
            )
          )}
        </div>
        <div className="text-center mx-auto mt-16">
          {step === 3 ? (
            <button
              onClick={handleCreateJob}
              className="bg-[#102866] text-[#fff] rounded-[10px] py-[10px] text-base w-[220px] "
            >
              {loading ? "Generating Job..." : "Submit"}
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="bg-[#102866] text-[#fff] rounded-[10px] py-[10px] px-16 text-base  "
            >
              Proceed
            </button>
          )}
        </div>
      </div>
    </RecuiterLayout>
  );
};

export default CreateJob;
