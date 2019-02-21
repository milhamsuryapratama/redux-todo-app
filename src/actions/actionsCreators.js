import { ADD_TODO, SET_VISIBILITY_FILTER, DELETE_TODO, EDIT_TODO } from './actionsTypes';

let id = 1;

export const addTodo = text => ({
    type: ADD_TODO,
    id: id++,
    text
})

// export const setVisibilityFilter = filter => ({
//     type: SET_VISIBILITY_FILTER,
//     filter
// })

export const deleteTodo = id => ({
    type: DELETE_TODO,
    id
})

export const editTodo = id => ({
    type: EDIT_TODO,
    id
})