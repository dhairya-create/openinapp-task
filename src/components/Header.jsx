import React from "react";
import { FaRegBell } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="p-9 flex justify-between items-center w-full">
      <div className="flex items-center w-full">
        <h5 className="inline-block antialiased tracking-normal font-sans text-xl leading-snug text-black-900 mr-10">
          <img
            className="h-10 w-15 inline-block mr-3"
            src="https://regspot.ai/wp-content/uploads/2023/09/Subtract.png"
            alt="Logo"
          />
          Base
        </h5>
        <h2 className="font-bold text-2xl ml-20">Upload CSV</h2>
      </div>

      <div className="text-2xl mr-7">
        <FaRegBell />
      </div>
      <div className="">
      <Link to='/login'>
      <img
            className="h-8 w-8 rounded-3xl hover:scale-150 transition-all duration-500"
            src="https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg"
            alt="Profile"
          />
      </Link>
         
        </div>
      
    </div>
  );
};

export default Header;
