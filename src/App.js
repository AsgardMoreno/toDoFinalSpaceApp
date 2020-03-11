import React from 'react';
import './App.css';

const mooncake = require('/Users/Primero/Documents/todoreact/src/img/mooncake.png');

function App() {
  return (
    <div className="App">
      <p className="App-tittle">
        FINAL SPACE REMINDER APP
      </p>
      <header className="App-header">
        <img src={mooncake} className="App-logo" alt="mooncake" /> 
      </header>
      <button className="Start-button">Let's Go!</button>
    </div>
  );
}

export default App;
