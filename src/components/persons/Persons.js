import React, {Component} from 'react';
import Person from './person/Person'

class Persons extends Component {
    constructor(props) {
        super(props);
        console.log("[Persons] inside constructor");
    }

    componentWillMount() {
        console.log("[Persons] inside componentWillMount");
    }

    componentDidMount() {
        console.log("[Persons] inside componentDidMount");
    }

    render() {
        console.log("[Persons] inside render");

        return this.props.persons.map((person, index) => {
            return (<Person
                key={person.id}
                name={person.name}
                age={person.age}
                position={index}
                click={() => this.props.clicked(index)}
                valueChange={(event) => this.props.valueChanged(event, person.id)}/>)
        });
    }
}


export default Persons;