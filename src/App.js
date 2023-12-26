import React from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import TaskContextProvider from './context/TaskContext';
import './App.css';

function App() {
  return (
    <TaskContextProvider>
      <div className="App">
        <TaskList />
        <TaskForm />
      </div>
    </TaskContextProvider>
  );
}

export default App;
