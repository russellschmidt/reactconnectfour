import React, { Component } from 'react';
import Square from './Square';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
          ['null','null', 'null', 'null', 'null', 'null'],
          ['null','null', 'null', 'null', 'null', 'null'],
          ['null','null', 'null', 'null', 'null', 'null'],
          ['null','null', 'null', 'null', 'null', 'null'],
          ['null','null', 'null', 'null', 'null', 'null'],
          ['null','null', 'null', 'null', 'null', 'null'],
          ['null','null', 'null', 'null', 'null', 'null']
      ]
    }
  }

  renderSquare(i, j) {
    return (
      <Square value={this.state.columns[i][j]} />
    );
  }

  handleClick(i) {
    var columns = this.state.columns.slice();
    for (let el of columns[i]){
      if (el === null) {
        el = "X";
        break;
      }
    }
    // this.setState(columns: columns)

  }

  render() {
    return (
      <div className="board">

        <div className="game-board">
          <table>
            <tbody>
              <tr className="row-5">
                <td className="col-0">{this.renderSquare(0,5)}</td>
                <td className="col-1">{this.renderSquare(1,5)}</td>
                <td className="col-2">{this.renderSquare(2,5)}</td>
                <td className="col-3">{this.renderSquare(3,5)}</td>
                <td className="col-4">{this.renderSquare(4,5)}</td>
                <td className="col-5">{this.renderSquare(5,5)}</td>
                <td className="col-6">{this.renderSquare(6,5)}</td>
              </tr>
              <tr className="row-4">
                <td className="col-0">{this.renderSquare(0,4)}</td>
                <td className="col-1">{this.renderSquare(1,4)}</td>
                <td className="col-2">{this.renderSquare(2,4)}</td>
                <td className="col-3">{this.renderSquare(3,4)}</td>
                <td className="col-4">{this.renderSquare(4,4)}</td>
                <td className="col-5">{this.renderSquare(5,4)}</td>
                <td className="col-6">{this.renderSquare(6,4)}</td>
              </tr>
              <tr className="row-3">
                <td className="col-0">{this.renderSquare(0,3)}</td>
                <td className="col-1">{this.renderSquare(1,3)}</td>
                <td className="col-2">{this.renderSquare(2,3)}</td>
                <td className="col-3">{this.renderSquare(3,3)}</td>
                <td className="col-4">{this.renderSquare(4,3)}</td>
                <td className="col-5">{this.renderSquare(5,3)}</td>
                <td className="col-6">{this.renderSquare(6,3)}</td>
              </tr>
              <tr className="row-2">
                <td className="col-0">{this.renderSquare(0,2)}</td>
                <td className="col-1">{this.renderSquare(0,1)}</td>
                <td className="col-2">{this.renderSquare(2,2)}</td>
                <td className="col-3">{this.renderSquare(3,2)}</td>
                <td className="col-4">{this.renderSquare(4,2)}</td>
                <td className="col-5">{this.renderSquare(5,2)}</td>
                <td className="col-6">{this.renderSquare(6,2)}</td>
              </tr>
              <tr className="row-1">
                <td className="col-0">{this.renderSquare(0,1)}</td>
                <td className="col-1">{this.renderSquare(1,1)}</td>
                <td className="col-2">{this.renderSquare(2,1)}</td>
                <td className="col-3">{this.renderSquare(3,1)}</td>
                <td className="col-4">{this.renderSquare(4,1)}</td>
                <td className="col-5">{this.renderSquare(5,1)}</td>
                <td className="col-6">{this.renderSquare(6,1)}</td>
              </tr>
              <tr className="row-0">
                <td className="col-0">{this.renderSquare(0,0)}</td>
                <td className="col-1">{this.renderSquare(1,0)}</td>
                <td className="col-2">{this.renderSquare(2,0)}</td>
                <td className="col-3">{this.renderSquare(3,0)}</td>
                <td className="col-4">{this.renderSquare(4,0)}</td>
                <td className="col-5">{this.renderSquare(5,0)}</td>
                <td className="col-6">{this.renderSquare(6,0)}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr className="row-foot">
                <td className="col-0"><button onClick={this.handleClick(0)}>place</button></td>
                <td className="col-1"><button onClick={this.handleClick(1)}>place</button></td>
                <td className="col-2"><button onClick={this.handleClick(2)}>place</button></td>
                <td className="col-3"><button onClick={this.handleClick(3)}>place</button></td>
                <td className="col-4"><button onClick={this.handleClick(4)}>place</button></td>
                <td className="col-5"><button onClick={this.handleClick(5)}>place</button></td>
                <td className="col-6"><button onClick={this.handleClick(6)}>place</button></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}

export default Board;
