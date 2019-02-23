import { SHOW_ALL, SET_VISIBILITY_FILTER, EDITED } from '../actions/actionsTypes';

const visibilityFilter = (state = SHOW_ALL, action) => {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        case EDITED:
            return action.filter;
        default:
            return state;
    }
}

export default visibilityFilter;