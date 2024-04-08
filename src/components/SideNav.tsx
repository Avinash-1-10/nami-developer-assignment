import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { MdWindow } from "react-icons/md";
import { IoCalendarClearOutline } from "react-icons/io5";
import { MdAutoGraph } from "react-icons/md";
import { FiUser } from "react-icons/fi";

const SideNav = () => {
  const [showDrawer, setDrawer] = useState(true);

  const toggleDrawer = () => {
    setDrawer(!showDrawer);
  };

  return (
    <div className=" flex flex-col gap-5  justify-center mt-4 box-border mx-2">
      <div className=" flex items-center gap-3 px-5 pl-5 text-lg bg-gray-200 p-2 border-b-[5px] border-b-orange-500">
        <IoHomeOutline />
        <p>Home</p>
      </div>
      <div
        className="flex items-center gap-1 text-lg cursor-pointer"
        onClick={toggleDrawer}
      >
        {showDrawer ? <IoIosArrowDown /> : <IoIosArrowUp />}
        <div className="flex items-center gap-2">
          <MdWindow />
          <p>console</p>
        </div>
      </div>
      {showDrawer && (
        <div className="pl-5 flex flex-col gap-5 text-lg">
          <div className="flex items-center gap-2">
            <IoCalendarClearOutline />
            <p>Attendance</p>
          </div>
          <div className="flex items-center gap-2">
            <MdAutoGraph />
            <p>Overview</p>
          </div>
          <div className="flex items-center gap-2">
            <FiUser />
            <p>Staff</p>
          </div>
          <div className="flex items-center gap-2">
            <MdWindow />
            <p>Console</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SideNav;
