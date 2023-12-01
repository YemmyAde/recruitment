import React, { useEffect, useState } from "react";
import RecuiterLayout from "../../layout/recuiterLayout";

const Profile = () => {
   const [userDetails, setUserDetails] = useState<any>();
   const user = JSON.parse(localStorage.getItem("recruitnUser")!);

   useEffect(() => {
     if (user) {
       setUserDetails(user?.data?.user);
     }
   }, []);
  console.log(userDetails)
  return (
    <RecuiterLayout>
      <div className=" w-full">
        <div className="w-[70%] mx-auto  shadow-[0_16px_32px_0_rgba(171,190,209,0.3)] my-12 p-12 max-w-[1000px]">
          <h1 className="h1-text text-[#000] font-semibold ">
            Personal Information
          </h1>
          <div className="flex justify-between gap-6 !text-[#000] mt-12">
            <div className="flex-1">
              <label
                htmlFor=""
                className="text-[1rem] leading-[23px] font-roboto font-normal"
              >
                First Name
              </label>

              <input
                type="text"
                className="settings-input !text-[#000] placeholder:!text-[#000] capitalize"
                placeholder="First Name"
                value={userDetails?.firstName}
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor=""
                className="text-[1rem] leading-[23px] font-roboto font-normal"
              >
                Last Name
              </label>

              <input
                type="text"
                className="settings-input !text-[#000] placeholder:!text-[#000] capitalize"
                placeholder="Last Name"
                value={userDetails?.lastName}
              />
            </div>
          </div>
          <div className="">
            <label
              htmlFor=""
              className="text-[1rem] leading-[23px] font-roboto font-normal"
            >
              Email
            </label>

            <input
              type="email"
              className="settings-input !text-[#000] placeholder:!text-[#000]"
              name=""
              id=""
              placeholder="Email"
              value={userDetails?.email}
            />
          </div>
          <div className="">
            <label
              htmlFor=""
              className="text-[1rem] leading-[23px] font-roboto font-normal"
            >
              Company name
            </label>

            <input
              type="text"
              className="settings-input !text-[#000] placeholder:!text-[#000]"
              placeholder="Company name"
              value={userDetails?.companyName}
            />
          </div>
          <div className="">
            <label
              htmlFor=""
              className="text-[1rem] leading-[23px] font-roboto font-normal"
            >
              Number of employees
            </label>

            <input
              type="text"
              className="settings-input !text-[#000] placeholder:!text-[#000]"
              placeholder="Number of employees"
              value={userDetails?.numOfEmployees}
            />
          </div>
          <div className="">
            <label
              htmlFor=""
              className="text-[1rem] leading-[23px] font-roboto font-normal"
            >
              Phone number
            </label>

            <input
              type="text"
              className="settings-input !text-[#000] placeholder:!text-[#000]"
              placeholder="Phone number"
              value={userDetails?.phoneNumber}
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
