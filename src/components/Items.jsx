import React from 'react';

const TodoItem = ({ task, removeTask, toggleTaskCompletion }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTaskCompletion(task.id)}
      />
      <span
        className={task.completed ? 'completed' : ''}
      >
        {task.text}
      </span>
      <button onClick={() => removeTask(task.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;