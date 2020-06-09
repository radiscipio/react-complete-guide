import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';
const app = props => {
  const [personsState, setPersonsState] = useState({
      persons: [
        { name: 'Robert', age: 28 },
        { name: 'Jordan', age: 27 },
        { name: 'Nathan', age: 27 }
      ],
      otherState: 'some value'
    });

  const switchNameHandler = () => {
    console.log('Was clicked');
      setPersonsState({ 
      persons: [
        { name: 'Robert', age: 28 },
        { name: 'Derek', age: 26 },
        { name: 'Sela', age: 33 },
      ]
    })
  };

    return (
      <div className="App">
        <h1>Hello there</h1>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person 
          name={personsState.persons[0].name}
          age={personsState.persons[0].age}
        />
        <Person 
          name={personsState.persons[1].name}
          age={personsState.persons[1].age}
        >and I like trains 🚂</Person>
        <Person 
          name={personsState.persons[2].name}
          age={personsState.persons[2].age} />
      </div>
    );
  }

export default app;