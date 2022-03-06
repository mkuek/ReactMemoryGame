import React, { Component } from "react";
import "./MemoryCard.css";

class MemoryCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isFlipped: false };
  }
  clickHandler() {
    this.setState({ isFlipped: !this.state.isFlipped });
  }
  render() {
    let memoryCardInnerClass = "MemoryCardInner";
    this.props.isFlipped == true
      ? (memoryCardInnerClass = "MemoryCardInner flipped")
      : (memoryCardInnerClass = "MemoryCardInner");

    return (
      <div className="MemoryCard" onClick={this.props.pickCard}>
        <div className={memoryCardInnerClass}>
          <div className="MemoryCardBack">
            <img
              src="https://www.digitalcrafts.com/img/digitalcrafts-logo-white-y.png"
              alt=""
            />
          </div>
          <div className="MemoryCardFront">{this.props.symbol}</div>
        </div>
      </div>
    );
  }
}
export default MemoryCard;
