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
    <div>
      <h3>Add Task</h3>
      <div>
        <input
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
          type="date"
          placeholder="type task sedule"
          value={sedule}
          onChange={(e) => {
            setSedule(e.target.value);
          }}
        />
      </div>
      <div>
        <button onClick={handleClickEvent}>Add Task</button>
      </div>
    </div>
  );
};

export default AddTask;
