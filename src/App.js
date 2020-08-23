import React from 'react';
// import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

        // <img src={logo} className="App-logo" alt="logo" />
function App() {
  return (
    <div className="container">
      <header className="App-header">
        <h3 className="display-3">Redux Counter</h3>
        <Counter />
      </header>
    </div>
  );
}

export default App;

