import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ILogin } from "../../../interfaces/ILogin";
import { login } from "../../services/authService";
import { getRecruiter } from "../../services/jobs";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<ILogin>({
    email: "",
    password: "",
  });

  const handleData = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleLogin = async () => {
    setLoading(true);
    try {
      const res = await login(data);
      if (res?.data?.success) {
        getProfile();
      } else if (!res?.data?.success) {
        toast.error(res?.data?.message!);
        setLoading(false);
      }
    } catch (e: any) {
      toast.error(e?.response?.message!);
      setLoading(false);
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
      <div className="text-[#A8ADAF] mx-auto mt-[30px] px-4 md:px-0 w-full md:w-[50%] pb-[50px] flex justify-center box-border">
        <div className="max-w-[620px] px-[0px]">
          <div className="text-center md:text-left">
            <Link to="/">
              <img
                src="/images/logo.svg"
                alt=""
                className="w-[100px] lg:w-[150px] xl:w-auto"
              />
            </Link>
            <h3 className="font-bold  leading-[2rem] text-[1.75rem] text-[#2864FF] md:text-[#000] font-roboto mt-[50px]">
              Login
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
            <input
              type="email"
              className="form-input"
              name="email"
              id=""
              placeholder="Email"
              value={data.email}
              onChange={handleData}
            />
            <input
              type="password"
              className="form-input"
              name="password"
              id=""
              placeholder="Password"
              value={data.password}
              onChange={handleData}
            />

            <button
              onClick={handleLogin}
              type="submit"
              className="bg-[#2864FF] text-[#fff] text-base w-full md:w-[400px] p-4 mt-[40px] mb-[20px] rounded-[8px] font-inter text-[1rem] font-medium "
            >
              {loading ? "Loading..." : "Login"}
            </button>
            <div className="relative text-center md:text-left">
              <img
                src="./images/user_octa.svg"
                alt=""
                className="absolute right-12 z-1 -top-4"
              />
              <p className="text-sm">
                Don't have an Account?{" "}
                <Link to="/register" className="text-[#2864FF]">
                  {" "}
                  Sign Up
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

export default Login;
