import React, { ReactNode, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PageLayout: React.FC<{ children: ReactNode; pageName: string }> = ({
  children,
  pageName,
}) => {
  const [menu, setMenu] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState<number>();
  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const resetWidth = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", resetWidth);

    return () => {
      window.removeEventListener("resize", resetWidth);
    };
  });

  const toggleMenu = () => {
    if (windowWidth! < 768) {
      setMenu(!menu);
    }
  };
  useEffect(() => {
    if (windowWidth! >= 768) setMenu(false);
  }, [windowWidth]);
  return (
    <div className="bg-[#fbf6f7] font-lato ">
      <div className="flex justify-between items-center md:border-b-[3px] md:border-b-[#E9EBEB] py-[35px] px-4  xl:px-[92px]">
        <Link to="/">
          <img
            src="/images/logo.svg"
            alt=""
            className="w-[100px] lg:w-[150px] xl:w-auto"
          />{" "}
        </Link>
        <button className="" onClick={toggleMenu}>
          <img src="/images/hamburger.svg" alt="" className=" md:hidden" />
        </button>
        <div
          className={`${
            menu
              ? "fixed left-0 top-0 bg-[#fff] w-[100vw]"
              : !menu && windowWidth! < 768
              ? "-left-[100%] absolute"
              : "flex"
          }    gap-x-8 lg:gap-x-16 flex-col md:flex-row transition-all ease-in-out px-16 md:px-0 py-8 md:py-0`}
        >
          <ul
            className="text-[18px] leading-[28px] text-[#263238] flex items-start md:items-center gap-x-4 md:gap-x-8 lg:gap-x-16 flex-col md:flex-row  gap-y-6 md:gap-y-0 relative
          "
          >
            <li className="flex items-center gap-4 md:hidden absolute right-0 -top-4">
              <button className="" onClick={toggleMenu}>
                <img src="/images/close.png" alt="" className=" md:hidden" />
              </button>
            </li>
            <li className="relative">
              <Link
                to="/"
                className={`${pageName === "index" && "text-[#2864FF] "} `}
              >
                Home
              </Link>
              {pageName === "index" && <div className="active"></div>}
            </li>
            <li className="relative">
              <Link
                to="/jobs"
                className={`${
                  pageName === "jobs" && "text-[#2864FF] "
                } font-medium`}
              >
                Jobs
              </Link>
              {/* <div className="h-[4px] w-[70px] bg-[#2864FF] rounded-[5px] absolute top-[70px] left-[-15px] invisible md:visible"></div> */}
              {pageName === "jobs" && <div className="active"></div>}
            </li>
            <li className="">
              <a href="" className="">
                About Us
              </a>
            </li>
            <li className="">
              <a href="" className="">
                Faqs
              </a>
            </li>
          </ul>
          <div className="text-[18px] leading-[28px] md:sm-text flex gap-x-4 lg:gap-x-8 items-start md:items-center flex-col md:flex-row  gap-y-6 md:gap-y-0 mt-6 md:mt-0">
            <Link
              to="/jobs"
              className="bg-[#fff] md:text-[#2864FF] md:border-[1px] md:border-[#2864FF] rounded-[0.5rem] md:py-[5px] lg:py-[10px] md:px-[10px] lg:px-[30px]"
            >
              Apply for jobs
            </Link>
            <Link
              to="/login"
              className="md:bg-[#2864FF] md:text-[#fff] rounded-[0.5rem] md:py-[6px] lg:py-[11px] md:px-[10px] lg:px-[20px]"
            >
              For recruiters
            </Link>
          </div>
        </div>
      </div>

      {children}
      <footer className="bg-[#000] text-[#fff] px-4  xl:px-[92px] py-8 font-lato">
        <div className="flex py-5">
          <p className=" text-base">JOBS</p>
        </div>
        <p className="">&#169;RecruitN</p>
      </footer>
    </div>
  );
};

export default PageLayout;
