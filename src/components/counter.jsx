import React, { Component } from "react";
import PropTypes from "prop-types";
class Counter extends Component {
  styles = {
    // camelCase
    fontSize: "10px",
    fontWeight: "bold"
  };

  render() {
    const { counters, id, onDelete, children, onIncrement, index } = this.props;

    return (
      <div>
        {children}
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formCount()}
        </span>
        <button
          onClick={() => onIncrement(index)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button className="btn btn-danger btn-sm" onClick={() => onDelete(id)}>
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
    return this.props.value === 0 ? "Zero" : this.props.value;
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
  onIncrement: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired
};
export default Counter;
