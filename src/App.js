import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {

  state = {
    persons: [
      { name: 'Robert', age: 28 },
      { name: 'Jordan', age: 27 },
      { name: 'Nathan', age: 27 }
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>Hello there</h1>
        <button>Switch Name</button>
        <Person 
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person 
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >and I like trains 🚂</Person>
        <Person 
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
      </div>
    );
  }
};

export default App;
