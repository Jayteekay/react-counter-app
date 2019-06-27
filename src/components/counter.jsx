import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
    tags: [
      { id: "tag1", name: "tag1" },
      { id: "tag2", name: "tag2" },
      { id: "tag3", name: "tag3" }
    ]
  };
  handleButtonClick() {
    console.log("You clicked a tag");
  }
  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag.id}>
            {tag.name}
            <button onClick={this.handleButtonClick}>Click</button>
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
