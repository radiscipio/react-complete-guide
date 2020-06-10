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
    otherState: 'some val',
    showPersons: false
  };

  switchNameHandler = (newName) => {
    this.setState({ 
      persons: [
        { name: newName, age: 28 },
        { name: 'Derek', age: 26 },
        { name: 'Sela', age: 33 },
      ]
    })
  };

  nameChangeHandler = (event) => {
    this.setState({ 
      persons: [
        { name: 'Robert', age: 28 },
        { name: 'Derek', age: 26 },
        { name: event.target.value, age: 33 },
      ]
    })
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons:!doesShow });
  };

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    return (
      <div className="App">
        <h1>Hello there</h1>
        <button stlyle={style} onClick={this.togglePersonsHandler}>Switch Name</button>
        { 
          this.state.showPersons === true ?
          <div>
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
          </div> : null
        }
      </div>
    );
  };
};

export default App;
