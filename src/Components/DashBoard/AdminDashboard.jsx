import React from "react";
import Header from "../Others/Header";
import TaskAssign from "../Others/TaskAssign";
import AllTask from "../Others/AllTask";

const AdminDashboard = (props) => {
  return (
    <>
      <Header changeUser={props.changeUser} />
      <TaskAssign />
      <AllTask />
      <TaskAssign />
      <AllTask />
    </>
  );
};

export default AdminDashboard;
