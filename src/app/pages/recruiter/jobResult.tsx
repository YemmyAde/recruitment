import React from "react";
import RecuiterLayout from "../../layout/recuiterLayout";
import { Link } from "react-router-dom";

const JobResult = () => {
  return (
    <RecuiterLayout>
      <div className="px-4  xl:px-[92px] pt-6 pb-12 bg-[#f7f6f7]">
        <button
          // onClick={() => setJobId("")}
          className="text-[#000] sm-text font-lato flex items-center gap-3 mt-4 mb-8"
        >
          <img src="/images/back_arrow.svg" alt="" className="" /> Back
        </button>

        <div className=" flex justify-between items-end mb-12 gap-2">
          <h2 className=" font-semibold text-2xl md:text-4xl ">
            My Job Result
          </h2>
          <div className="text-right md:hidden">
            <p className="text-4xl">6</p>
            <p className=" text-base">Applied Candidate</p>
          </div>
        </div>

        <div className="between-flex">
          <div className="bg-[#F4F5F5] w-full md:w-[510px] rounded-[20px] sm:py-8 p-4 sm:px-[2rem]  flex gap-x-8 border-[1px] border-[#000] text-left">
            <div className="">
              <div className="between-flex">
                <div className="flex items-center gap-2">
                  <img src="/images/company_logo.svg" alt="" className="w-5" />
                  <p className="md-text mb-1 font-lato">Consulting Ltd</p>
                </div>
                <p className="text-[9px] leading-[13px] font-lato rounded-[5px] text-[#2E7D31] bg-[#E9FFEF] py-2 px-4 md:px-8">
                  Open
                </p>
              </div>
              <div className="between-flex mt-2">
                <p className=" text-base font-semibold  text-[#2864FF] font-roboto">
                  Senior Software Engineer
                </p>
                <p className="text-[#7D8488] text-xs font-normal pl-[10px] font-lato">
                  Remote
                </p>
              </div>

              <p className=" text-[#515B60] text-[0.75rem] leading-[1.0rem]  font-lato mt-2 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                porta ipsum diam, nec efficitur urna ultricies eu. Nam ultrices
                ante quis ipsum molestie gravida. Nam nec dui sodales, volutpat
                risus quis, dictum velit. In vel tempor molestie.
              </p>
              <div className="gap-y-2 gap-x-6 flex flex-wrap my-4">
                <p
                  className={` bg-[#E9EFFF] rounded-[5px] px-[1.875rem] py-2 text-[#7D8488] text-[0.65rem] leading-[1rem] `}
                >
                  Javascript
                </p>
                <p
                  className={` bg-[#E9EFFF] rounded-[5px] px-[1.875rem] py-2 text-[#7D8488] text-[0.65rem] leading-[1rem]`}
                >
                  Javascript
                </p>
              </div>

              <div className="gap-12 flex items-center justify-start">
                <div
                  className={` text-[#515B60] text-xs font-medium flex gap-1 items-center`}
                >
                  <img src="/images/location.svg" alt="" className="w-4" />
                  <p className="">Lagos</p>
                </div>
                <p className="text-[#515B60] text-xs font-medium">
                  Deadline: <span className="font-normal">20th Dec, 2023</span>
                </p>
              </div>
            </div>
          </div>

          <div className="text-right hidden md:block">
            <p className="text-4xl">6</p>
            <p className=" text-base">Applied Candidate</p>
          </div>
        </div>
        <div className="overflow-x-auto text-xs md:text-base">
          <table className="w-full my-12 min-w-[500px]">
            <tr className="bg-[#102866] text-[#E9EFFF]  ">
              <th className="py-6 px-6 text-left rounded-tl-[10px] rounded-bl-[10px]">
                Candidate's Name
              </th>
              <th className="text-left">Job Title</th>

              <th className="text-left">Score</th>
              <th className="text-left">Email</th>
              <th className="rounded-tr-[10px] rounded-br-[10px] text-left">
                Taken at
              </th>
            </tr>
            <tbody className="font-lato  text-sm pt-8 text-[#000]">
              <tr className="shadow-[0_2px_24px_0_rgba(171,190,209,0.4)] py-12 my-12">
                <td className="flex items-center gap-4 py-8 px-4 text-left ">
                  <p className="bg-[#2864FF] w-[20px] h-[20px] md:w-[38px] md:h-[38px] uppercase rounded-full center-flex text-base md:text-[27px] text-[#fff]">
                    F
                  </p>
                  <p className="inline-block">
                    <span className="inline-block">Favour Gold</span> <br />
                    <Link
                      to="/dashboard/view_candidate"
                      className="underline text-[#2864FF] text-[8px] md:text-[12px] leading-[1rem]"
                    >
                      {" "}
                      View Result
                    </Link>
                    <img
                      src="/images/view.svg"
                      alt=""
                      className="inline w-[5px] md:w-auto ml-2"
                    />
                  </p>
                </td>
                <td className="">title</td>

                <td className="">Score</td>
                <td className="">Email</td>
                <td className="">Taken at</td>
              </tr>
              <tr className="shadow-[0_2px_24px_0_rgba(171,190,209,0.4)] py-12 my-12">
                <td className="flex items-center gap-4 py-8 px-4 text-left ">
                  <p className="bg-[#2864FF] w-[20px] h-[20px] md:w-[38px] md:h-[38px] uppercase rounded-full center-flex text-base md:text-[27px] text-[#fff]">
                    F
                  </p>
                  <p className="inline-block">
                    <span className="inline-block">Favour Gold</span> <br />
                    <Link
                      to=""
                      className="underline text-[#2864FF] text-[8px] md:text-[12px] leading-[1rem]"
                    >
                      {" "}
                      View Result
                    </Link>
                    <img
                      src="/images/view.svg"
                      alt=""
                      className="inline w-[5px] md:w-auto ml-2"
                    />
                  </p>
                </td>
                <td className="">title</td>

                <td className="">Score</td>
                <td className="">Email</td>
                <td className="">Taken at</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </RecuiterLayout>
  );
};

export default JobResult;
