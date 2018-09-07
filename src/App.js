import React, {Component} from 'react';
import Person from './Person/Person';
import Radium from 'radium';
import './App.css';

class App extends Component {
    state = {
        persons: [
            {id: '1', name: 'person1', age: 27},
            {id: '2', name: 'person2', age: 28},
            {id: '3', name: 'person3', age: 29}
        ],
        showPersons: false
    };

    handleButtonClick = (newName, displayPersons) => {
        this.setState(
            {
                persons: [
                    {id: '1', name: newName, age: 27},
                    {id: '2', name: 'person2', age: 28},
                    {id: '3', name: 'person3', age: 24}
                ],
                showPersons: displayPersons
            }
        );
    };

    togglePersons = () => {
        const prev = this.state.showPersons;
        this.setState({
            showPersons: !prev
        });
    };

    targetValueChange = (event, personId) => {
        //copy of the persons array
        const persons = [...this.state.persons];

        //index of the person
        const indexOfPerson = persons.findIndex(p => p.id === personId);
        const origPerson = persons[indexOfPerson];

        //copy of the person
        const personCopy = {...origPerson};
        personCopy.name = event.target.value;

        persons[indexOfPerson] = personCopy;

        this.setState(
            {
                persons: persons
            }
        );
    };

    deletePerson = (index) => {
        const persons = [...this.state.persons];
        persons.splice(index, 1);
        this.setState({
            persons: persons
        });
    };

    render() {
        const style = {
            backgroundColor: 'green',
            color: 'white',
            padding: '8px',
            border: '1px solid blue',
            font: 'inherit',
            cursor: 'pointer',
            ':hover': {
                backgroundColor: 'lightgreen',
                color: 'black'
            }
        };

        let persons = null;
        if (this.state.showPersons) {
            persons = this.getPersons();
            style.backgroundColor = 'red';
            style[':hover'] = {
                backgroundColor: 'salmon',
                color: 'black'
            }
        }

        const classes = [];
        if (this.state.persons.length <= 2) {
            classes.push('red');  //'red'
        }

        if (this.state.persons.length <= 1) {
            classes.push('bold'); // 'red', 'bold'
        }

        return (
            <div className="App">
                <h2> some header </h2>
                <p className={classes.join(' ')}>
                    This is a paragraph
                </p>
                <button
                    style={style}
                    onClick={this.togglePersons}>Toggle Persons
                </button>
                {persons}
            </div>
        );
    }

    getPersons() {
        return (<div>
            {this.state.persons.map((person, index) => {
                return (<Person
                    key={person.id}
                    name={person.name}
                    age={person.age}
                    click={() => this.deletePerson(index)}
                    valueChange={(event) => this.targetValueChange(event, person.id)}/>)
            })}
        </div>);
    }
}

export default Radium(App);
