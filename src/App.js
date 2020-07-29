import React from 'react';
import TodoContainer from './components/todo/TodoContainer'
import logo from './assets/logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="App-container">
        <TodoContainer />
      </div>
    </div>
  );
}

export default App;
