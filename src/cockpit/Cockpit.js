import React from 'react';
import classes from './Cockpit.css';
import Aux from '../components/hoc/Aux';

const cockpit = (props) => {
    let  btnClass = [classes.Button, classes.Green].join(' ');
    if (props.showPersons) {
        btnClass = [classes.Button, classes.Red].join(' ');
    }

    const assignedClasses = [];
    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red);  //'red'
    }

    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold); // 'red', 'bold'
    }

    return (
        <Aux>
            <h2> {props.title} </h2>
            <p className={assignedClasses.join(' ')}>
                This is a paragraph
            </p>

            <button
                className={btnClass}
                onClick={props.togglePersons}>Toggle Persons
            </button>
        </Aux>
    );
};

export default cockpit;