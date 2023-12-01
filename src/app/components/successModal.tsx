import React from "react";
import { Link } from "react-router-dom";

const SuccessModal: React.FC<{
  text?: string;
  text2: string;
  text3: string;
  link: string;
  img: string;
  heading?: string;
  content?: string;
}> = ({ text, text2, text3, link, img, heading, content }) => {
  return (
    <div className="flex justify-center items-center w-full h-[100vh] fixed top-0 bg-[rgba(233,239,255,0.4)] backdrop-blur-sm z-[100]">
      <div className="bg-[#e8effe] rounded-[20px] p-12 w-[400px] mx-auto text-center">
        <div className="flex items-center justify-center">
          <img src={img} alt="" className="" />
        </div>
        <div className="my-4">
          <p className=" text-[#000] font-semibold text-2xl mb-4">{heading}</p>
          <p className=" text-[#A8ADAF] font-bold text-base ">{text}</p>
          <p className="text-[#263238] text-sm mb-2">{content}</p>
          <p className="text-[#263238] text-sm">
            {text2}
            <Link to={link} className="text-[#2864FF] underline">
              {` ${text3}`}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
