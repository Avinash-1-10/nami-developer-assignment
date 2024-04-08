import React from "react";

const Filters = () => {
  return (
    <div className="flex gap-2 py-3 my-2 text-xs md:text-base overflow-y-auto mx-2">
      <p className="px-2 border rounded-full text-gray-500 text-nowrap py-1">
        Not Accepted
      </p>
      <p className="px-2 border rounded-full text-gray-500 text-nowrap py-1">
        Ongoing
      </p>
      <p className="px-2 border rounded-full text-gray-500 text-nowrap py-1">
        Scheduled
      </p>
      <p className="px-2 border rounded-full text-gray-500 text-nowrap py-1">
        Completed
      </p>
      <p className="px-2 border rounded-full text-gray-500 text-nowrap py-1">
        Delayed
      </p>
      <p className="px-2 border rounded-full text-gray-500 text-nowrap py-1">
        Ontime
      </p>
    </div>
  );
};

export default Filters;
