import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaCircleUser } from "react-icons/fa6";

const TopNav = () => {
  return (
    <div className="py-5 px-10 flex justify-between items-center shadow-md">
      <p className="text-2xl">ABC Hotel</p>
      <div className="flex items-center gap-10 text-3xl">
        <IoMdNotificationsOutline />
        <FaCircleUser />
      </div>
    </div>
  );
};

export default TopNav;
