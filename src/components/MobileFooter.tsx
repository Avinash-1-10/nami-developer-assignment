import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { MdWindow } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";

const MobileFooter = () => {
  return (
    <div className="relative shadow-md border">
      <div className="w-screen flex justify-center gap-32 items-center text-2xl p-5 bg-white  ">
        <IoHomeOutline />
        <MdWindow />
        <IoMdAddCircle className="absolute top-[-25px] text-6xl text-indigo-600"/>
      </div>
    </div>
  );
};

export default MobileFooter;
