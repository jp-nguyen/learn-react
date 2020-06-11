import React from 'react';
import logo from './logo.svg';
import Counter from './Counter';
import './css/App.css';

function App() {
  console.log("App");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
      </header>
    </div>
  );
}

export default App;
