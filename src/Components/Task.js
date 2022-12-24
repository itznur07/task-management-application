import React, { useContext } from "react";
import { AppContext } from "../context";

const Task = ({ task }) => {
  const { dispatchUserEvent } = useContext(AppContext);

  const handleDeleteEvent = () => {
    dispatchUserEvent("REMOVE_TASK", { taskId: task.id });
  };

  return (
    <div className="flex items-center justify-around mt-6">
      <div className="max-w-sm max-h-sm bg-slate-200 shadow rounded px-6 py-2">
        <h3>
          <li>{task.title}</li>
        </h3>
        <h3>
          <li>{task.sedule}</li>
        </h3>
        <h3>
          <li>{task.disc}</li>
        </h3>
        <button
          className="px-4 py-1  bg-slate-300 shadow rounded"
          onClick={handleDeleteEvent}
        >
          Delete Task
        </button>
      </div>
    </div>
  );
};

export default Task;
