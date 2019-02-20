import { ADD_TODO, SET_VISIBILITY_FILTER } from './actionsTypes';

let id = 1;

export const addTodo = text => ({
    type: ADD_TODO,
    id: id++,
    text
})

export const setVisibilityFilter = filter => ({
    type: SET_VISIBILITY_FILTER,
    filter
})