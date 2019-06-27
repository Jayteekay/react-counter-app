import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
    imageSrc: "https://picsum.photos/200",
    stateClass: "primary"
  };
  styles = {
    fontSize: 20,
    fontWeight: "bold"
  };
  render() {
    return (
      <React.Fragment>
        <img src={this.state.imageSrc} />
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button>Increment</button>
      </React.Fragment>
    );
  }
  getBadgeClasses() {
    const { count } = this.state;
    let classes = "badge m-2 badge-";
    classes += count === 0 ? "warning" : this.state.stateClass;
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    this.state.stateClass = "badge-warning";
    return count !== 0 ? count : "Zero";
  }
}

export default Counter;
