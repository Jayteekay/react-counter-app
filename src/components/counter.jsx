import React, { Component } from "react";

class Counter extends Component {
  state = {
    tags: [
      { id: 0, name: "tag1", count: 0 },
      { id: 1, name: "tag2", count: 0 },
      { id: 2, name: "tag3", count: 0 }
    ]
  };
  handleButtonClick = () => {
    this.tags[id];
  };
  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag.id} className="m-2">
            <span className="badge badge-primary">{tag.count}</span>
            {tag.name}
            <button
              onClick={() => this.handleButtonClick(tag.id)}
              className="btn btn-success"
            >
              Click
            </button>
          </li>
        ))}
      </ul>
    );
  }
  render() {
    return (
      <React.Fragment>
        {this.state.tags.length == 0 && "Please create a new tag."}
        {this.renderTags()}
      </React.Fragment>
    );
  }
}

export default Counter;
