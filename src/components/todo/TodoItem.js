import React, { Component } from 'react';
import './TodoItem.css';

export default class TodoItem extends Component {

  render() {
    const { item, deleteItem } = this.props;

    return (
      <div className="TodoItem">
        <span className="TodoItem-text">{item.text}</span>
        <button className="TodoItem-delete" onClick={() => deleteItem(item.id)}>-</button>
      </div>
    )
  }
}