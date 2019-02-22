import { SHOW_ALL, SET_VISIBILITY_FILTER, ADD_TODO } from '../actions/actionsTypes';

const visibilityFilter = (state = SHOW_ALL, action) => {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        case ADD_TODO:
            return state;
        default:
            return state;
    }
}

export default visibilityFilter;