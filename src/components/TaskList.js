
import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import './TaskList.css';

const TaskList = () => {
  const { tasks, removeTask } = useContext(TaskContext);

  return (
    <div>
      <h2>Task List</h2>
      {tasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              {task.text}
              <button onClick={() => removeTask(task.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;