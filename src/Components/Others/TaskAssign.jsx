import React, { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const TaskAssign = () => {
  const [userData, setUserData] = useContext(AuthContext)
  const [task, setTask] = useState("");
  const [employe, setEmploye] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const [newTask, setNewTask] = useState('');

  const submithandler = (e) => {
    e.preventDefault();
    // console.log(task);
    // console.log(employe);
    // console.log(date);
    // console.log(category);
    // console.log(description);

    //with this array we will add our form data to thee fields.
    setNewTask({
      task,
      employe,
      date,
      category,
      description,
      active: true,
      newTask: false,
      completed: false,
      failed: false,
    });
    //this will get the data of employees from the localStorage
    const data = userData
    //foreach will run for every person
    userData.forEach((elem)=> {
      if (employe == elem.firstName) {
        //push is a method to give your data to localStorage
        elem.tasks.push(newTask)
        elem.taskNumbers.newTask = elem.taskNumbers.newTask + 1
        
      }
    });
    

    setCategory("");
    setDate("");
    setDescription("");
    setEmploye("");
    setTask("");
  };

  return (
    <>
      <div className="w-full px-10 mt-7">
        <div className="bg-zinc-700 p-8 rounded-md">
          <form
            onSubmit={(e) => {
              submithandler(e);
            }}
            className="flex justify-between gap-32"
          >
            <div className="flex flex-col justify-between w-[50%]">
              <input
                value={task}
                onChange={(e) => {
                  setTask(e.target.value);
                }}
                className="font-medium text-lg bg-transparent border-b-2 outline-none placeholder:text-zinc-400"
                type="text"
                placeholder="Task Title"
              />
              <input
                value={date}
                onChange={(e) => {
                  setDate(e.target.value);
                }}
                className="font-medium text-lg bg-transparent border-b-2 outline-none placeholder:text-zinc-400"
                type="date"
                placeholder="Select Date"
              />
              <input
                value={employe}
                onChange={(e) => {
                  setEmploye(e.target.value);
                }}
                className="font-medium text-lg bg-transparent border-b-2 outline-none placeholder:text-zinc-400"
                type="text"
                placeholder="Employee Name"
              />
              <input
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
                className="font-medium text-lg bg-transparent border-b-2 outline-none placeholder:text-zinc-400 "
                type="text"
                placeholder="Category"
              />
            </div>
            <div className="flex flex-col w-[50%] gap-6">
              <textarea
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                className="font-light text-lg rounded-md outline-none placeholder:text-zinc-400 h-56 resize-none p-5 bg-transparent border-[1px]"
                name=""
                id=""
                placeholder="Description "
              ></textarea>
              <button className="bg-green-600 px-5 py-2 rounded-md font-semibold text-lg">
                Create Task
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default TaskAssign;
