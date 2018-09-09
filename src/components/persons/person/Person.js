import React, {Component} from 'react';
import classes from './Person.css'

class Person extends Component {
    constructor(props) {
        super(props);
        console.log("[Person] inside constructor");
    }

    componentWillMount() {
        console.log("[Person] inside componentWillMount");
    }

    componentDidMount() {
        console.log("[Person] inside componentDidMount");
    }

    render() {
        console.log("[Person] inside render");

        return (
            <div className={classes.Person}>
                <h3 onClick={this.props.click}>I am {this.props.name} and I'm {this.props.age} years old</h3>
                <p>{this.props.children}</p>
                <p><input type="text" onChange={this.props.valueChange} value={this.props.name}/> </p>
            </div>
        )
    }
}

export default Person;