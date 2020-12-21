import React, { Component } from "react";

import "./post-status-filter.css";
import { Button } from "reactstrap";

export default class PostStatusFilter extends Component {
  constructor(props) {
    super(props);
    this.buttons = [
      { name: "all", label: "All" },
      { name: "liked", label: "Favorites" }
    ];
  }

  render() {
    const buttons = this.buttons.map(({ name, label }) => {
      const active = this.props.filter === name;
      const activeClass = active ? "btn-info" : "btn-outline-secondary";
      return (
        <button
          type="button"
          key={name}
          className={`btn ${activeClass}`}
          onClick={() => this.props.onFilterSelect(name)}
        >
          {label}
        </button>
      );
    });
    return <div className="btn-group">{buttons}</div>;
  }
}
