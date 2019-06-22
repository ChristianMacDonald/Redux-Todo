import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

class TodoForm extends React.Component {
    handleSubmit = event => {
        event.preventDefault();
        let elements = event.target.elements;
        let todo = {
            value: elements['value'].value,
            completed: false
        };
        this.props.addTodo(todo);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="value" />
                <input type="submit" />
            </form>
        );
    }
}

const mapStateToProps = state => {
    return {};
}

export default connect(mapStateToProps, { addTodo: addTodo })(TodoForm);