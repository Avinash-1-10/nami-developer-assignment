import { IoMdRestaurant } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
import { FaStar } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";

const TaskHistoryCard = () => {
  return (
    <div className="w-[335px] md:w-[360px] border rounded-lg p-2 flex flex-col gap-3 bg-white">
      {/* first row */}
      <div className="flex justify-between">
        <div className="flex items-center gap-1">
          <span className="bg-gray-100 flex items-center justify-between gap-1 rounded-full p-1">
            <IoMdRestaurant className="text-blue-500" />
            <p className="text-xs">Rajesh</p>
            <GoDotFill className=" text-red-600" />
          </span>
          <p className="text-xs bg-red-600 text-white px-2 py-1 rounded-full">
            Delayed
          </p>
          <p className="text-xs bg-red-600 text-white px-2 py-1 rounded-full">
            Complaint
          </p>
        </div>
        <span className="text-xs flex justify-center items-center gap-1 px-2 py-1 rounded-full bg-red-600 text-white">
        <p>1</p>
        <FaStar className="text-xs"/>
        </span>
      </div>
      {/* second row */}
      <div className="flex justify-between items-center">
        <p className=" font-semibold">Routine Cleaning</p>
        <p className="text-xs text-red-500 bg-gray-100 px-2 py-1 rounded-full">
          Guest task
        </p>
      </div>
      {/* third row */}
      <div className="flex justify-between items-center text-gray-500">
        <span className="flex gap-2 items-center justify-center">
          <CiCalendar />
          <p className="text-xs">21 Jul 2024 | 03:00 am</p>
        </span>
        <p className="text-xs"># 68988</p>
      </div>
      {/* fourth row */}
      <div className="flex justify-between items-center text-gray-500 text-xs font-semibold">
        <p>From:Pantry</p>
        <p>To:Reception</p>
      </div>
      {/* fifth row */}
      <button className="flex items-center justify-center gap-2 py-2 rounded-full border border-indigo-500 transition-all text-indigo-500">
        <p className=" text-xs">View Details</p>
      </button>
    </div>
  );
};

export default TaskHistoryCard;
