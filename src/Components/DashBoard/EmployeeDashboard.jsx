import React from "react";
import Header from "../Others/Header";
import TaskList from "../TaskList/TaskList";
import TaskCounter from "../Others/TaskCounter";

const EmployeeDashboard = (props) => {

  return (
    <div className="">
      <Header changeUser={props.changeUser} data={props.data} />
      <TaskCounter data={props.data} />
      <TaskList data={props.data} />
    </div>
  );
};

export default EmployeeDashboard;
