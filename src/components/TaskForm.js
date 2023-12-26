// src/components/TaskForm.js
import React, { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import './TaskForm.css';

const TaskForm = () => {
  const [taskText, setTaskText] = useState('');
  const { addTask } = useContext(TaskContext);

  const handleInputChange = (e) => {
    setTaskText(e.target.value);
  };

  const handleAddTask = () => {
    if (taskText.trim() !== '') {
      addTask(taskText);
      setTaskText('');
    }
  };

  return (
    <div>
      <h2>Add Task</h2>
      <div>
        <input
          type="text"
          value={taskText}
          onChange={handleInputChange}
          placeholder="Enter task"
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
    </div>
  );
};

export default TaskForm;
