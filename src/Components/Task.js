import React, { useContext } from "react";
import { AppContext } from "../context";

const Task = ({ task }) => {
  const { dispatchUserEvent } = useContext(AppContext);

  const handleDeleteEvent = () => {
    dispatchUserEvent("REMOVE_TASK", { taskId: task.id });
  };

  return (
    <div>
      <h3>{task.id}</h3>
      <h3>{task.title}</h3>
      <h3>{task.sedule}</h3>
      <h3>{task.disc}</h3>
      <button onClick={handleDeleteEvent}>Delete Task</button>
    </div>
  );
};

export default Task;
