// App.tsx
import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import axios from 'axios';

const App = () => {
  const [tasks, setTasks] = useState<string[]>([]);

  useEffect(() => {
    // Fetch tasks from backend
    axios.get('http://localhost:3000/fetchAllTasks')
      .then(response => {
        console.log(response)
        setTasks(response.data.tasks);
      })
      .catch(error => console.error('Error fetching tasks:', error));
  }, []);

  return (
    <div className='flex justify-center items-center flex-col gap-4'>
      <h1  className='text-3xl font-bold'>Note App</h1>
      <TodoInput setTasks={setTasks} />
      <TodoList tasks={tasks} />
    </div>
  );
};

export default App;
