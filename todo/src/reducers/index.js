import { ADD_TODO } from '../actions';

const initialState = {
    todos: []
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return { todos: state.todos.concat(action.payload) };
        default:
            return state;
    }
}

export default reducer;