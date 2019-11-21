import React, { Component } from "react";
import "./Playerinfo.css";
// import Square from "./Square";

class Playerinfo extends Component {
  render() {
    const { curPlayer, winResult } = this.props;
    if (winResult.result) {
      return (
        
        <div className="playerinfo"> player: {winResult.winPlayer} - win</div>
      );
    } else return <div className="playerinfo"> next player: {curPlayer}</div>;
  }
}
export default Playerinfo;
