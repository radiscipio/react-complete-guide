import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {

  state = {
    persons: [
      { name: 'Robert', age: 28 },
      { name: 'Jordan', age: 27 },
      { name: 'Nathan', age: 27 }
    ],
    otherState: 'some val'
  }

  switchNameHandler = (newName) => {
    this.setState({ 
      persons: [
        { name: newName, age: 28 },
        { name: 'Derek', age: 26 },
        { name: 'Sela', age: 33 },
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({ 
      persons: [
        { name: 'Robert', age: 28 },
        { name: 'Derek', age: 26 },
        { name: event.target.value, age: 33 },
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hello there</h1>
        <button onClick={this.switchNameHandler.bind(this, 'Robert di Scipio')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, 'Robert Attilio di Scipio')}
        />
        <Person 
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >and I like trains 🚂
        </Person>
        <Person 
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          changed={this.nameChangeHandler}
        />
      </div>
    );
  }
};

export default App;
