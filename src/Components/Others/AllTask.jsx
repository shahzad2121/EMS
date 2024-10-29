import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);
  

  // console.log(authData.employees);

  return (
    <>
      <div id="scroll" className="w-full h-60 px-10 mt-7 overflow-auto">
        <div className="bg-zinc-700 p-8 flex flex-col gap-5 rounded-md">
          <div className="flex justify-between items-center bg-sky-900 px-8 py-3 rounded-md">
            <h2 className="font-semibold text-lg w-1/5">Name</h2>
            <h3 className="text-lg w-1/5">Active Tasks</h3>
            <h3 className="text-lg w-1/5">New Tasks</h3>
            <h3 className="text-lg w-1/5">Completed Tasks</h3>
            <h3 className="text-lg w-1/5">Failed Tasks</h3>
          </div>
          {userData.map((elem) => {
            return (
              <div key={elem.id} className="flex justify-between items-center border-[1px]  px-8 py-3 rounded-md">
                <h2  className="font-semibold text-lg w-1/5">
                  {elem.firstName}
                </h2>
                <h3 className="text-lg w-1/5">
                  {elem.taskNumbers.active}
                </h3>
                <h3 className="text-lg w-1/5">
                  {elem.taskNumbers.newTask}
                </h3>
                <h3 className="text-lg w-1/5">
                  {elem.taskNumbers.completed}
                </h3>
                <h3 className="text-lg w-1/5">
                  {elem.taskNumbers.failed}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AllTask;
