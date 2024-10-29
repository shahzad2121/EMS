import React from "react";
import ActiveTask from "./ActiveTask";
import CompleteTask from "./CompleteTask";
import NewTask from "./NewTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
  return (
    <>
      <div className="px-10 mt-16 h-[50%] w-full flex overflow-x-auto gap-6">
      {data.tasks.map((elem, idx)=>{
        if (elem.active) {
        return <ActiveTask key={idx} data={elem} />          
        }
        if (elem.completed) {
          return <CompleteTask key={idx} data={elem} />
        }
        if(elem.newTask){
          return <NewTask key={idx} data={elem} />
        }
        if(elem.failed){
          return <FailedTask key={idx} data={elem} />
        }
      })}
      </div>
    </>
  );
};

export default TaskList;
