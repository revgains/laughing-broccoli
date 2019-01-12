import React, { Component } from "react";
import "./App.css";

const NavBar = ({ handleClick, calls }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand mb-0 h1">
        Tukkimiehen kirjanpito
        <span className="badge badge-secondary m-2">
          Soittoja yhteensä {calls.length}
        </span>
      </span>
      <button onClick={handleClick} className="btn btn-ls btn-primary">
        Ming soitti
      </button>
      <button onClick={handleClick} className="btn btn-l btn-danger">
        Nestori soitti
      </button>
      <button onClick={handleClick} className="btn btn-l btn-warning">
        Roger soitti
      </button>
    </nav>
  );
};

class App extends Component {
  state = {
    calls: ""
  };

  handleClick = () => {
    this.setState({ calls: this.state.calls.concat("I") });
  };

  render() {
    return (
      <div>
        <NavBar calls={this.state.calls} handleClick={this.handleClick} />
        <div className="m-2 card">
          <h1>{this.state.calls}</h1>
        </div>
      </div>
    );
  }
}

export default App;
