import React, { Component } from 'react';
import './Todo.css';
import TodoItem from './TodoItem';

export default class Todo extends Component {
  constructor(props) {
    super(props);

    // Initial state
    this.state = {
      todos: [
        { id: 1, text: 'Todo item 01' },
        { id: 2, text: 'Todo item 02' },
      ],
      todoText: ''
    };
  }

  // Methods & handlers
  generateId = () => {
    if (this.state.todos && this.state.todos.length > 0) {
      return Math.max(...this.state.todos.map(item => item.id)) + 1;
    } else {
      return 1;
    }
  }

  createTodo = () => {
    // Validate todoText
    if (!this.state.todoText) {
      alert('Please enter a todo!');
      return;
    }

    const newTodo = { id: this.generateId(), text: this.state.todoText };

    this.setState(({ todos }) => ({
      todos: [
        ...todos,
        newTodo
      ],
      todoText: ''
    }));
  };

  deleteTodo = (id) => {
    this.setState(({ todos }) => ({
      todos: todos.filter((item) => item.id !== id)
    }));
  };

  handleInputKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.createTodo();
    }
  };

  handleInputChange = (e) => {
    this.setState({
      todoText: e.target.value
    });
  };

  render() {
    const { todos, todoText } = this.state;

    return (
      <div className="Todo">
        <h1 className="Todo-header">React To Do</h1>
        <div className="Todo-container">
          <div className="Todo-content">
            {todos.map(item => {
              return <TodoItem key={item.id} item={item} deleteItem={this.deleteTodo} />
            })}
          </div>
          <div className="Todo-input">
            <input className="Todo-input-text" type="text" value={todoText} onChange={this.handleInputChange} onKeyPress={this.handleInputKeyPress} />
            <button className="Todo-input-add" onClick={this.createTodo}>+</button>
          </div>
        </div>
      </div>
    );
  }
}
