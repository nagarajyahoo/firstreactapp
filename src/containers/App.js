import React, {Component} from 'react';
import Persons from '../components/persons/Persons';
import classes from './App.css';
import Cockpit from '../cockpit/Cockpit'

class App extends Component {
    constructor(props) {
        super(props);
        console.log("[App] inside constructor");
    }

    componentWillMount() {
        console.log("[App] inside componentWillMount");
    }

    componentDidMount() {
        console.log("[App] inside componentDidMount");
    }

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
        console.log("[App] inside render");

        let persons = null;
        if (this.state.showPersons) {
            persons = <Persons
                persons={this.state.persons}
                clicked={this.deletePerson}
                valueChanged={this.targetValueChange}/>;
        }

        return (
            <div className={classes.App}>

                <Cockpit
                    title={this.props.title}
                    persons={this.state.persons}
                    showPersons={this.state.showPersons}
                    togglePersons={this.togglePersons}/>

                {persons}
            </div>
        );
    }
}

export default App;
