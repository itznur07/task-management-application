import React, { useContext } from "react";
import { AppContext } from "../context";
import Task from "./Task";

const TaskList = () => {
  const { tasks } = useContext(AppContext);

  return (
    <div>
      <h3 className="mt-4 font-bold text-2xl uppercase text-center">
        Available Task
      </h3>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
