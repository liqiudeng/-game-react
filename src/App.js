import React, { Component } from "react";
import "./App.css";
import Board from "./components/Board";
import Playerinfo from "./components/Playerinfo";
import History from "./components/History";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: new Array(9).fill(null),
      stepCount: 0,
      history: []
    };
  }
  getCurPlayer() {
    const { stepCount } = this.state;
    return stepCount % 2 == 0 ? "X" : "0";
  }
  render() {
    const curPlayer = this.getCurPlayer();
    const { history, squares } = this.state;
    return (
      <div className="App">
        <div className="leftPanel">
          <Board squares={squares} />
        </div>
        <div className="rightPanel">
          <Playerinfo curPlayer={curPlayer} />
          <History history={history} />
        </div>
      </div>
    );
  }
}

export default App;
