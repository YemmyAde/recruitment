import React from "react";
import RecuiterLayout from "../../layout/recuiterLayout";

const Profile = () => {
  return (
    <RecuiterLayout>
      <div className=" w-full">
        <div className="w-[70%] mx-auto  shadow-[0_16px_32px_0_rgba(171,190,209,0.3)] my-12 p-12 max-w-[1000px]">
          <h1 className="h1-text text-[#000] font-semibold ">
            Personal Information
          </h1>
          <div className="flex justify-between gap-6 !text-[#000] mt-12">
            <div className="flex-1">
              <label htmlFor="" className="text-[1.1875rem] leading-[23px]">
                First Name
              </label>

              <input
                type="text"
                className="settings-input !text-[#000] placeholder:!text-[#000]"
                placeholder="First Name "
              />
            </div>
            <div className="flex-1">
              <label htmlFor="" className="text-[1.1875rem] leading-[23px]">
                Last Name
              </label>

              <input
                type="text"
                className="settings-input !text-[#000] placeholder:!text-[#000]"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="">
            <label htmlFor="" className="text-[1.1875rem] leading-[23px]">
              Email
            </label>

            <input
              type="email"
              className="settings-input !text-[#000] placeholder:!text-[#000]"
              name=""
              id=""
              placeholder="Email"
            />
          </div>
          <div className="">
            <label htmlFor="" className="text-[1.1875rem] leading-[23px]">
              Company name
            </label>

            <input
              type="text"
              className="settings-input !text-[#000] placeholder:!text-[#000]"
              placeholder="Company name"
            />
          </div>
          <div className="">
            <label htmlFor="" className="text-[1.1875rem] leading-[23px]">
              Number of employees
            </label>

            <input
              type="text"
              className="settings-input !text-[#000] placeholder:!text-[#000]"
              placeholder="Number of employees"
            />
          </div>
          <div className="">
            <label
              htmlFor=""
              className="text-[1.1875rem] leading-[23px]text-[19px] leading-[23px]"
            >
              Phone number
            </label>

            <input
              type="text"
              className="settings-input !text-[#000] placeholder:!text-[#000]"
              placeholder="Phone number"
            />
          </div>

          <div className="flex justify-end">
            <button className="bg-[#102866] text-[#fff] md-text py-2 px-4 mt-[40px] rounded-[10px] font-roboto font-medium">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </RecuiterLayout>
  );
};

export default Profile;
