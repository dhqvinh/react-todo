import React, { useState } from 'react';
import './Todo.css';
import TodoItem from './TodoItem';

const Todo = () => {
  // Initial state
  const [todos, setTodos] = useState([
    { id: 1, text: 'Todo item 01' },
    { id: 2, text: 'Todo item 02' }
  ]);
  const [todoText, setTodoText] = useState('');

  // Methods & handlers
  const generateId = () => {
    if (todos && todos.length > 0) {
      return Math.max(...todos.map(item => item.id)) + 1;
    } else {
      return 1;
    }
  };

  const createTodo = () => {
    // Validate todoText
    if (!todoText) {
      alert('Please enter a todo!');
      return;
    }

    const newTodo = { id: generateId(), text: todoText };
    setTodos([...todos, newTodo]);
    setTodoText('');
  };


  const handleInputKeyPress = (e) => {
    if (e.key === 'Enter') {
      createTodo();
    }
  };

  const handleInputChange = (e) => {
    setTodoText(e.target.value);
  };


  const deleteTodo = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  return (
    <div className="Todo">
      <h1 className="Todo-header">React To Do</h1>
      <div className="Todo-container">
        <div className="Todo-content">
          {todos.map(item => {
            return <TodoItem key={item.id} item={item} deleteItem={deleteTodo} />
          })}
        </div>
        <div className="Todo-input">
          <input className="Todo-input-text" type="text" value={todoText} onChange={handleInputChange} onKeyPress={handleInputKeyPress} />
          <button className="Todo-input-add" onClick={createTodo}>+</button>
        </div>
      </div>
    </div>
  );
};

export default Todo;