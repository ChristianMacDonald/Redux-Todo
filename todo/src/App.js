import React from 'react';
import { connect } from 'react-redux';
import { removeCompletedTodos } from './actions';
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

class App extends React.Component {
  handleClearComplete = event => {
    this.props.removeCompletedTodos();
  }

  render() {
    return (
      <div className="App">
        <h1>Redux Todo</h1>
        <TodoList />
        <button onClick={this.handleClearComplete}>Clear Complete</button>
        <TodoForm />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
}

export default connect(mapStateToProps, { removeCompletedTodos })(App);
