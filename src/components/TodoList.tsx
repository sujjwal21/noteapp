import React from 'react';

interface TodoListProps {
  tasks: string[];
}

const TodoList: React.FC<TodoListProps> = ({ tasks }) => {
  return (
  //   <div className="w-full max-w-lg mx-auto p-5 border border-gray-300 rounded-lg bg-gray-100 shadow-md">
  //   <h2 className="text-2xl font-semibold text-center mb-4 text-gray-700">Your Tasks</h2>
  //   <ul className="list-none p-0">
  //     {tasks.length > 0 ? (
  //       tasks.map((task, index) => (
  //         <li
  //           key={index}
  //           className="p-3 mb-2 bg-white rounded-lg shadow-sm border border-gray-200"
  //         >
  //           {task}
  //         </li>
  //       ))
  //     ) : (
  //       <p className="text-gray-500 text-center">No tasks yet! Add your first task.</p>
  //     )}
  //   </ul>
  // </div>
  <div className="w-full max-w-lg mx-auto p-5 border border-gray-300 rounded-lg bg-gray-100 shadow-md">
  <h2 className="text-2xl font-semibold text-center mb-4 text-gray-700">Notes</h2>
  <ul className="list-none p-0">
    {tasks.length > 0 ? (
      tasks.map((task, index) => (
        <li
          key={index}
          className="p-3 mb-2 bg-white rounded-lg shadow-sm border border-gray-200"
        >
          {task}
        </li>
      ))
    ) : (
      <p className="text-gray-500 text-center">No tasks yet! Add your first task.</p>
    )}
  </ul>
</div>
  );
};

export default TodoList;
