import React, { Component } from 'react';
import './Todo.css';
import TodoItem from './TodoItem';

export default class Todo extends Component {
  constructor(props) {
    // props will receive Redux state & actions from the Container
    super(props);

    // Component state
    this.state = {
      todoText: ''
    };
  }

  // Methods & handlers
  generateId = () => {
    if (this.props.todos && this.props.todos.length > 0) {
      return Math.max(...this.props.todos.map(item => item.id)) + 1;
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

    // Call redux action
    this.props.createTodo(newTodo);

    this.setState({
      todoText: ''
    });
  };


  deleteTodo = (id) => {
    // Call redux action
    this.props.deleteTodo(id);
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
    const { todos } = this.props;
    const { todoText } = this.state;

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
