import React from 'react';
import { connect } from 'react-redux';
import { removeTodo, toggleComplete } from '../actions';
import './Todo.css';

class TodoList extends React.Component {
    handleDelete = event => {
        this.props.removeTodo(parseInt(event.target.dataset.index));
    }

    handleToggleComplete = event => {
        this.props.toggleComplete(parseInt(event.target.dataset.index));
    }

    render() {
        return (
            <div>
                {this.props.todos.map((todo, index) => {
                    return (
                        <div key={index}>
                            <span className={todo.completed ? 'completed' : ''} data-index={index} onClick={this.handleToggleComplete}>{todo.value}</span>
                            <button data-index={index} onClick={this.handleDelete}>x</button>
                        </div>
                    );
                })}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    };
}

export default connect(mapStateToProps, { removeTodo, toggleComplete })(TodoList);