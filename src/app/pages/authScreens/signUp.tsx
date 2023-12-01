import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signUp } from "../../services/authService";
import { IRegister } from "../../../interfaces/IRegister";
import InputWithAnimatedLabel from "../../components/animatedInput";
import { toast } from "react-toastify";
import { getRecruiter } from "../../services/jobs";

const SignUp = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  const [data, setData] = useState<IRegister>({
    firstName: "",
    lastName: "",
    numOfEmployees: undefined,
    phoneNumber: undefined,
    companyName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSignup = async () => {
    try {
      const res = await signUp(data);
      if (res?.data?.success) {
        getProfile();
      } else if (!res?.data?.success) {
        toast.error(res?.data?.message!);
        setLoading(false);
      }
    } catch (e: any) {
      toast.error(e?.response?.data?.message);
      return e;
    }
  };

  const getProfile = async () => {
    setLoading(true);
    try {
      const res = await getRecruiter();
      if (res) {
        res && navigate("/dashboard");
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
    }
  };

  return (
    <div className="flex font-lato gap-[5%] w-full max-w-[1440px] mx-auto">
      <div className="text-[#A8ADAF] mx-auto mt-[30px] px-4 md:px-0 md:w-[50%] pb-[50px] flex justify-center box-border">
        <div className="max-w-[620px]">
          <div className="text-center md:text-left">
            <Link to="/">
              <img
                src="/images/logo.svg"
                alt=""
                className="w-[100px] lg:w-[150px] xl:w-auto"
              />{" "}
            </Link>
            <h3 className="font-bold  leading-[2rem] text-[1.75rem] text-[#2864FF] md:text-[#000] font-roboto mt-[50px]">
              Sign Up
            </h3>
            <p className="text-lg mb-[20px] font-normal font-lato">
              to continue to recruitN
            </p>
          </div>
          <button className="flex items-center form-input">
            <img src="./images/google_icon.svg" alt="" className="" /> Continue
            with Google
          </button>
          <div className="flex justify-center items-center gap-4 sm:gap-8 py-2">
            <div className="h-[2px] w-[80px] sm:w-[150px] bg-[#F4F5F5]"></div>
            Or
            <div className="h-[2px] w-[80px] sm:w-[150px] bg-[#F4F5F5]"></div>
          </div>
          <div>
            <div className="flex justify-between gap-6">
              <InputWithAnimatedLabel
                name="firstName"
                values={data}
                onChange={setData}
                placeholder="First Name"
                type="text"
                required
              />

              <InputWithAnimatedLabel
                name="lastName"
                values={data}
                onChange={setData}
                placeholder="Last Name"
                type="text"
              />
            </div>
            <InputWithAnimatedLabel
              name="email"
              values={data}
              onChange={setData}
              placeholder="Email"
              type="email"
            />
            <InputWithAnimatedLabel
              type="text"
              className="form-input"
              placeholder="Company name"
              name="companyName"
              onChange={setData}
              values={data}
            />
            <InputWithAnimatedLabel
              type="number"
              className="form-input"
              placeholder="Number of employees"
              name="numOfEmployees"
              onChange={setData}
              values={data}
              min={0}
            />
            <InputWithAnimatedLabel
              type="number"
              className="form-input"
              placeholder="Phone number"
              name="phoneNumber"
              onChange={setData}
              values={data}
              min={0}
            />
            <InputWithAnimatedLabel
              type="password"
              className="form-input"
              placeholder="Password"
              name="password"
              onChange={setData}
              values={data}
            />
            <InputWithAnimatedLabel
              type="password"
              className="form-input"
              placeholder="Confirm Password"
              name="confirmPassword"
              onChange={setData}
              values={data}
            />
            <div className="flex items-start gap-x-2 mt-4">
              <input type="checkbox" name="" id="" />
              <p className="text-[#263238] lato text-xs">
                Yes, I’d like to receive helpful resources like tutorials,
                templates and the latest hiring advice, as well as invitations
                to Workable events. (You can opt out any time). View our privacy
                policy.
              </p>
            </div>
            <button
              onClick={handleSignup}
              className="bg-[#2864FF] text-[#fff] text-base w-full md:w-[400px] p-4 mt-[40px] mb-[20px] 
              rounded-[8px] font-inter text-[1rem] font-medium "
            >
              {loading ? "Loading" : "Sign Up"}
            </button>
            <div className="relative text-center md:text-left">
              <img
                src="./images/user_octa.svg"
                alt=""
                className="absolute right-12 z-1 -top-4"
              />
              <p className="text-sm">
                Have an Account?{" "}
                <Link to="/login" className="text-[#2864FF]">
                  {" "}
                  Sign In{" "}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[45%] right-half relative hidden md:block">
        <div className="absolute text-[#102866] bottom-20 left-12">
          <h1 className="font-inter font-bold text-4xl">
            RecruitN: Your Seamless Hr
          </h1>
          <p className="font-istok text-lg mt-3 w-[90%]">
            Discover, hire, and manage the perfect candidates with our seamless
            recruitment software.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
