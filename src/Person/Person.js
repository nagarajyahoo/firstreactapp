import React from 'react';
import classes from './Person.css'

const person = (props) => {
    return (
        <div className={classes.Person}>
            <h3 onClick={props.click}>I am {props.name} and I'm {props.age} years old</h3>
            <p>{props.children}</p>
            <p><input type="text" onChange={props.valueChange} value={props.name}/> </p>
        </div>
    )
};

export default person;