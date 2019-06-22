export const ADD_TODO = 'ADD_TODO';

export const addTodo = todo => {
    return {
        type: ADD_TODO,
        payload: todo
    }
}

export const REMOVE_TODO = 'REMOVE_TODO';

export const removeTodo = index => {
    return {
        type: REMOVE_TODO,
        payload: index
    }
}

export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';

export const toggleComplete = index => {
    return {
        type: TOGGLE_COMPLETE,
        payload: index
    }
}

export const REMOVE_COMPLETED_TODOS = 'REMOVE_COMPLETED_TODOS';

export const removeCompletedTodos = () => {
    return {
        type: REMOVE_COMPLETED_TODOS
    }
}