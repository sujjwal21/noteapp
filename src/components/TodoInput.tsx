import React, { useState } from "react";

const ws = new WebSocket("ws://localhost:3000");

const TodoInput = ({
  setTasks,
}: {
  setTasks: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
  const [task, setTask] = useState("");

  const handleAddTask = () => {
    if (task.trim()) {
      const newTask = task;
      ws.send(JSON.stringify({ event: "add", data: newTask }));
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setTask("");
    }
  };

  return (
    // <div className="flex items-center border-2 border-gray-300 p-2 rounded-lg" >
    //   <input
    //     type="text"
    //     value={task}
    //     onChange={(e) => setTask(e.target.value)}
    //     placeholder="Enter a new task"
    //   />
    //   <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600" onClick={handleAddTask}>Add Task</button>
    // </div>
    <div className="flex border-2 border-gray-300 p-2 rounded-lg shadow-sm bg-white">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a new task"
        className="flex-grow p-2 border-none outline-none "
      />
      <button className="ml-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
        Add
      </button>
    </div>
  );
};

export default TodoInput;
