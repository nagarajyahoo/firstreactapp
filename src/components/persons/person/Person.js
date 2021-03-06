import React, {Component} from 'react';
import WithClass from '../../hoc/WithClass'
import PropTypes from 'prop-types'

import classes from './Person.css'

class Person extends Component {
    constructor(props) {
        super(props);
        console.log("[Person] inside constructor");
        this.myTextInputBox = React.createRef();
    }

    componentWillMount() {
        console.log("[Person] inside componentWillMount");
    }

    componentDidMount() {
        console.log("[Person] inside componentDidMount");
        if (this.props.position === 0) {
            this.myTextInputBox.current.focus();
        }
    }

    render() {
        console.log("[Person] inside render");

        return (
            <WithClass classes={classes.Person}>
                <h3 onClick={this.props.click}>I am {this.props.name} and I'm {this.props.age} years old</h3>
                <p>{this.props.children}</p>
                <p><input
                    ref={this.myTextInputBox}
                    type="text"
                    onChange={this.props.valueChange}
                    value={this.props.name}/></p>
            </WithClass>
        )
    }
}

Person.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    click: PropTypes.func,
    valueChange: PropTypes.func,
};

export default Person;