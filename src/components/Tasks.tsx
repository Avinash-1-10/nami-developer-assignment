import React from "react";
import OngoingServices from "./OngoingServices";
import TaskHistory from "./TaskHistory";
import Scheduled from "./Scheduled";

const Tasks = () => {
  return (
    <div className="flex items-center justify-center md:justify-between">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <OngoingServices />
        <TaskHistory />
        <Scheduled />
      </div>
    </div>
  );
};

export default Tasks;
