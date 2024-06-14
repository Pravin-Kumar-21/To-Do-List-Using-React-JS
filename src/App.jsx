import React, { useState, useEffect } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import Filters from './components/Filters';
import './index.css';
const App = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [filter, setFilter] = useState('all');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);
// task creation 
  const addTask = (task) => {
    setTasks([...tasks, { text: task, completed: false, id: Date.now() }]);
  };
  // to remove the tasks 
  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };
  // task completion 
  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };
  // next filter task 
  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'active') return !task.completed;
    return true;
  });

  return (
    <div className="TodoApp">
      <h1>To-Do List</h1>
      <TodoInput addTask={addTask} />
      <Filters setFilter={setFilter} />
      <TodoList
        tasks={filteredTasks}
        removeTask={removeTask}
        toggleTaskCompletion={toggleTaskCompletion}
      />
    </div>
  );
};

export default App;