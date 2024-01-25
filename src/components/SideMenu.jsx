import React, { useState } from "react";

import Uploader from "./Uploader";

import { RxDashboard } from "react-icons/rx";
import { BsFileBarGraphFill } from "react-icons/bs";
import { TbFileInvoice } from "react-icons/tb";
import { CiViewList } from "react-icons/ci";
import { FaCalendarAlt } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { MdSettings } from "react-icons/md";

const SideMenu = () => {
  const [activeOption, setActiveOption] = useState("Upload");

  const menuOptions = [
    {
      icon: <RxDashboard />,
      text: "Dashboard",
    },
    {
      icon: <BsFileBarGraphFill />,
      text: "Upload",
    },
    {
      icon: <TbFileInvoice />,
      text: "Invoice",
    },
    {
      icon: <CiViewList />,
      text: "Schedule",
    },
    {
      icon: <FaCalendarAlt />,
      text: "Calendar",
    },
    {
      icon: <IoNotifications />,
      text: "Notifications",
    },
    {
      icon: <MdSettings />,
      text: "Settings",
    },
  ];

  const handleButtonClick = (text) => {
    setActiveOption(text);
  };

  return (
    <div className="flex">
      <div className="relative flex flex-col  rounded-xl bg-white text-gray-700 w-full max-w-[20rem] p-4 ">
        <nav className="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-gray-700  max-lg:hidden">
          {menuOptions.map((option, index) => (
            <div
              key={index}
              role="button"
              tabIndex="0"
              onClick={() => handleButtonClick(option.text)}
              className={`${
                activeOption === option.text
                  ? "text-[#5574f2]  text-lg"
                  : "text-gray text-lg"
              } flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80  active:bg-opacity-80  focus:text-[#5574f2] active:text-blue-900 outline-none`}
            >
              <div className="grid place-items-center mr-4">{option.icon}</div>
              {option.text}
            </div>
          ))}
        </nav>
      </div>
      <Uploader />
    </div>
  );
};



export default SideMenu;
