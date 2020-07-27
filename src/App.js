import React from 'react';
import Todo from './components/todo/Todo'
import logo from './assets/logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="App-container">
        <Todo />
      </div>
    </div>
  );
}

export default App;
