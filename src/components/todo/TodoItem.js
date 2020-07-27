import React from 'react';
import './TodoItem.css';

const TodoItem = (props) => {
  const { item, deleteItem } = props;

  return (
    <div className="TodoItem">
      <span className="TodoItem-text">{item.text}</span>
      <button className="TodoItem-delete" onClick={() => deleteItem(item.id)}>-</button>
    </div>
  )
};

export default TodoItem;