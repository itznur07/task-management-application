import React, { useState } from "react";
import AddTask from "./Components/AddTask";
import TaskList from "./Components/TaskList";
import { AppContext } from "./context";

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);

  const dispatchUserEvent = (actionType, payload) => {
    switch (actionType) {
      case "ADD_TASK":
        setTasks([...tasks, payload.newTask]);
        return;
      case "REMOVE_TASK":
        setTasks(tasks.filter((task) => task.id !== payload.taskId));
        return;
      default:
        return;
    }
  };

  return (
    <div>
      <AppContext.Provider value={{ tasks, dispatchUserEvent }}>
        <AddTask />
        <TaskList />
      </AppContext.Provider>
    </div>
  );
};

export default TaskManager;
