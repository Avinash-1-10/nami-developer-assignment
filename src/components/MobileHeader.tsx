import React from "react";
import { IoSearch } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaCircleUser } from "react-icons/fa6";

const MobileHeader = () => {
  return (
    <div className="w-screen p-5 bg-white flex justify-between items-center">
      <p className="text-lg">Tasks of the day</p>
      <div className="flex justify-center items-center gap-5 text-2xl">
        <IoSearch />
        <IoMdNotificationsOutline />
        <FaCircleUser />
      </div>
    </div>
  );
};

export default MobileHeader;
