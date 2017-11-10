import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {

    function handleClickZero(e) {
      e.preventDefault();


    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactConnectFour</h1>
        </header>
        <p className="App-intro">
          The classic game reimagined for the future.
        </p>
        <div className="game-board">
          <table>
            <tbody>
              <tr className="row-5">
                <td className="col-0"></td>
                <td className="col-1"></td>
                <td className="col-2"></td>
                <td className="col-3"></td>
                <td className="col-4"></td>
                <td className="col-5"></td>
                <td className="col-6"></td>
              </tr>
              <tr className="row-4">
                <td className="col-0"></td>
                <td className="col-1"></td>
                <td className="col-2"></td>
                <td className="col-3"></td>
                <td className="col-4"></td>
                <td className="col-5"></td>
                <td className="col-6"></td>
              </tr>
              <tr className="row-3">
                <td className="col-0"></td>
                <td className="col-1"></td>
                <td className="col-2"></td>
                <td className="col-3"></td>
                <td className="col-4"></td>
                <td className="col-5"></td>
                <td className="col-6"></td>
              </tr>
              <tr className="row-2">
                <td className="col-0"></td>
                <td className="col-1"></td>
                <td className="col-2"></td>
                <td className="col-3"></td>
                <td className="col-4"></td>
                <td className="col-5"></td>
                <td className="col-6"></td>
              </tr>
              <tr className="row-1">
                <td className="col-0"></td>
                <td className="col-1"></td>
                <td className="col-2"></td>
                <td className="col-3"></td>
                <td className="col-4"></td>
                <td className="col-5"></td>
                <td className="col-6"></td>
              </tr>
              <tr className="row-0">
                <td className="col-0"></td>
                <td className="col-1"></td>
                <td className="col-2"></td>
                <td className="col-3"></td>
                <td className="col-4"></td>
                <td className="col-5"></td>
                <td className="col-6"></td>
              </tr>
            </tbody>
            <tfoot>
              <tr className="row-foot">
                <td className="col-0"><button onClick={handleClickZero}>place</button></td>
                <td className="col-1"><button>place</button></td>
                <td className="col-2"><button>place</button></td>
                <td className="col-3"><button>place</button></td>
                <td className="col-4"><button>place</button></td>
                <td className="col-5"><button>place</button></td>
                <td className="col-6"><button>place</button></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
