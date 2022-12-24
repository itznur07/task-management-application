import React, { useContext, useState } from "react";
import { AppContext } from "../context";

const AddTask = () => {
  const { dispatchUserEvent } = useContext(AppContext);

  const [title, setTitle] = useState("");
  const [disc, setDisc] = useState("");
  const [sedule, setSedule] = useState("");

  const handleClickEvent = () => {
    if (title | disc | (sedule === "")) {
      alert("Fill the feild");
    } else {
      const task = { id: Math.random(), title, disc, sedule };
      dispatchUserEvent("ADD_TASK", { newTask: task });
    }
    setTitle("");
    setDisc("");
    setSedule("");
  };
  return (
    <div className="flex items-center justify-center">
      <div>
        <h3 className="uppercase text-2xl font-bold text-center">Add Task</h3>
        <div className="mt-4">
          <input
            className="border px-11 py-1 focus:outline-none border-sky-600 focus:border-pink-700 mb-2 rounded"
            type="text"
            placeholder="type task title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            className="border px-11 py-1 focus:outline-none border-sky-600 focus:border-pink-700 mb-2 rounded"
            type="text"
            placeholder="type task description"
            value={disc}
            onChange={(e) => {
              setDisc(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            className="border px-11 py-1 focus:outline-none border-sky-600 focus:border-pink-700 mb-2 rounded"
            type="date"
            placeholder="type task sedule"
            value={sedule}
            onChange={(e) => {
              setSedule(e.target.value);
            }}
          />
        </div>
        <div>
          <button
            className="mt-1 px-6 py-1 bg-sky-400 hover:bg-pink-400 rounded font-bold text-normal text-white"
            onClick={handleClickEvent}
          >
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
