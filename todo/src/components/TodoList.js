import React from 'react';
import { connect } from 'react-redux';

const TodoList = props => {
    return (
        <div>
            {props.todos.map(todo => <div>{todo.value}</div>)}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    };
}

export default connect(mapStateToProps, {})(TodoList);