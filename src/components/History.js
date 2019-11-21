import React, { Component } from "react";
// import Square from './Square'
import "./History.css";

class History extends Component {
  handleClick(item) {
    const { onClickHistory } = this.props;
    if (onClickHistory) {
      onClickHistory(item);
    }
  }
  genHistoryStart() {
    return (
      <li key={"history-item-start"}>
        {/* key */}
        <button onClick={this.props.onRestartGame}>Restart</button>
      </li>
    );
  }
  genHistoryItem(item, index) {
    return (
      <li key={"history-item-${index}"}>
        <div classname="position" onClick={this.handleClick.bind(this, item)}>
          #{item.stepCount}: player{item.player} on position of {item.pos}
        </div>
      </li>
    );
  }
  render() {
    const { history } = this.props;
    if (history.length === 0) {
      return <div className="history">History</div>;
    } else {
      return (
        <div className="history">
          <ul>
            {this.genHistoryStart()}
            {history.map((item, index) => this.genHistoryItem(item, index))}
          </ul>
        </div>
      );
    }
  }
}
export default History;
