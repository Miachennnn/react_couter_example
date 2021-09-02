import React from "react";

export default class Counter extends React.Component {
  render() {
    return (
      <div>
        <span className={this.spanClass()}>{this.quantity()}</span>
        <button
          className="m-2 btn btn-secondary"
          onClick={this.props.onIncrement}
        >
          Increment
        </button>
        <button className="btn btn-danger" onClick={this.props.onDelete}>
          Delete
        </button>
      </div>
    );
  }
  spanClass() {
    const { quantity } = this.props.counters;
    return quantity === 0 ? "badge bg-warning text-dark" : "badge bg-primary";
  }
  quantity() {
    const { quantity } = this.props.counters;
    return quantity === 0 ? "Zero" : quantity;
  }
}
