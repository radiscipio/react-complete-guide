import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello there</h1>
        <Person name="Robert" age="28" />
        <Person name="Jordan" age="27" />
        <Person name="Nathan" age="27" />
      </div>
    );
  }
}

export default App;
