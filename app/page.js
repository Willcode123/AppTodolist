'use client'

import React, { useState } from 'react';
import './App.css';

const TodoApp = () => {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputText.trim() !== '') {
      setTodos([...todos, inputText]);
      setInputText('');
    }
  };

  const handleDelete = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Enter a task"
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
