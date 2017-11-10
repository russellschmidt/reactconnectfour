import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './components/Board';

class App extends Component {
  render() {

    return (
      <div className="App">
        <div className="game-header">

        </div>
        <div className="game-header">
          <Board />
        </div>
      </div>
    );
  }
}

export default App;
