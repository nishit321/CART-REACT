import React, { Component } from "react";

class Counter extends Component {
  styles = {
    // camelCase
    fontSize: "10px",
    fontWeight: "bold"
  };

  render() {
    return (
      <div>
        {this.props.children}
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counters)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => this.props.onDelete(this.props.id)}
        >
          Delete
        </button>
        {/* {this.state.tags.length === 0 && "There is no tags!"}
        {this.renderTags()} */}
      </div>
    );
  }

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    else return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
  }

  // doHandleIncrement = () => {
  //   this.handleIncrement({ id: 1 });
  // };
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.value === 0 ? "warning" : "primary";
    return classes;
  }

  formCount() {
    const value = this.props.value;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
