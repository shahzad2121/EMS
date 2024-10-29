import React from "react";

const TaskCounter = ({data}) => {
  return (
    <>
      <div className="py-10 px-10 w-full flex items-center justify-between gap-6">
        <div className="bg-[#3D5A80] w-[24%] gap-2 rounded-md py-8 flex flex-col justify-center pl-5">
          <h2 className="font-bold text-4xl">{data.taskNumbers.newTask}</h2>
          <h3 className="font-medium text-2xl">New Task</h3>
        </div>
        <div className="bg-[#EE6C4D] w-[24%] gap-2 rounded-md py-8 flex flex-col justify-center pl-5">
          <h2 className="font-bold text-4xl">{data.taskNumbers.active}</h2>
          <h3 className="font-medium text-2xl">Accepted Task</h3>
        </div>
        <div className="bg-[#98C1D9] w-[24%] gap-2 rounded-md py-8 flex flex-col justify-center pl-5">
          <h2 className="font-bold text-4xl">{data.taskNumbers.completed}</h2>
          <h3 className="font-medium text-2xl">Completed Task</h3>
        </div>
        <div className="bg-[#78290F] w-[24%] gap-2 rounded-md py-8 flex flex-col justify-center pl-5">
          <h2 className="font-bold text-4xl">{data.taskNumbers.failed}</h2>
          <h3 className="font-medium text-2xl">Failed Task</h3>
        </div>
      </div>
    </>
  );
};

export default TaskCounter;
