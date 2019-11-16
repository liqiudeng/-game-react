import React, { Component } from "react";
import "./Playerinfo.css";
import Square from "./Square";

class Playerinfo extends Component {
  render() {
    const { curPlayer } = this.props;
    return <div className="playerinfo"> next player:{curPlayer}</div>;
  }
}
export default Playerinfo;
