import React, { Component } from "react";

class TodoList extends Component {
  componentDidUpdate() {
    this.props.inputElement.current.focus();
  }
  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.props.addItem}>
            <input
              onChange={this.props.handleInput}
              ref={this.props.inputElement}
              value={this.props.currentItem.text}
              placeholder="Task"
            />
            <button onClick={this.props.addItem} type="submit">
              {" "}
              Add Task{" "}
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default TodoList;
