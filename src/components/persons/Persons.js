import React from 'react';
import Person from './person/Person'

const persons = (props) =>
    props.persons.map((person, index) => {
        return (<Person
            key={person.id}
            name={person.name}
            age={person.age}
            click={() => props.clicked(index)}
            valueChange={(event) => props.valueChanged(event, person.id)}/>)
    });

export default persons;