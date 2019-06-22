import { ADD_TODO, REMOVE_TODO, TOGGLE_COMPLETE, REMOVE_COMPLETED_TODOS } from '../actions';

const initialState = {
    todos: [],
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return { todos: state.todos.concat(action.payload) };
        case REMOVE_TODO:
            return { todos: state.todos.filter((todo, index) => index !== action.payload) };
        case TOGGLE_COMPLETE:
            return {
                todos: state.todos.map((todo, index) => {
                    if (index === action.payload) {
                        return { ...todo, completed: !todo.completed};
                    } else {
                        return todo;
                    }
                })
            };
        case REMOVE_COMPLETED_TODOS:
            return {
                todos: state.todos.filter(todo => !todo.completed)
            }
        default:
            return state;
    }
}

export default reducer;