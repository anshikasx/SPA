import React, { useState, useEffect } from 'react';
import './App.css'; 

function App() {
  
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('react-todo-list');
    if (savedTodos) {
      return JSON.parse(savedTodos);
    }
    return [];
  }); 
  
  const [inputValue, setInputValue] = useState('');

  
  useEffect(() => {
    localStorage.setItem('react-todo-list', JSON.stringify(todos));
  }, [todos]); 

 

  const addTodo = () => {
    if (inputValue.trim() === '') return;

    const newTodo = {
      id: Date.now(),
      text: inputValue.trim(),
      isCompleted: false,
    };

    setTodos([...todos, newTodo]);
    setInputValue('');
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  

  return (
    <div className="todo-container">
      <header className="todo-header">
        <h1>My To-Do List</h1>
      </header>

      <div className="input-area">
        <input
          type="text"
          placeholder="Add a new task..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              addTodo();
            }
          }}
          className="task-input"
        />
        <button onClick={addTodo} className="add-button">
          Add
        </button>
      </div>

      <ul className="task-list">
        {todos.map((todo) => (
          <li key={todo.id} className="task-item">
            <span
              onClick={() => toggleComplete(todo.id)}
              className={`task-text ${todo.isCompleted ? 'completed' : ''}`}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)} className="delete-button">
              Delete
            </button>
          </li>
        ))}
      </ul>
      
      {todos.length === 0 && (
        <p className="empty-message">
          🎉 All done! No tasks remaining.
        </p>
      )}

    </div>
  );
}

export default App;