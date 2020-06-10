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

  deletePersonHandler (personIndex) => {
    // const persons = this.state.persons.slice(); or use spead operator (ES6 [...])
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({persons : persons})
  }

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
      border: '1px solid #ccc',
      padding: '8px',
      cursor: 'pointer',
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age} />
          })}
        </div>
      );
    };

    return (
      <div className="App">
        <h1>Hello there</h1>
        <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  };
};

export default App;
