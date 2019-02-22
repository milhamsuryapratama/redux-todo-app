import { ADD_TODO, DELETE_TODO, EDIT_TODO } from '../actions/actionsTypes';

const initialState = [];

const TodoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state, {
                    id: action.id,
                    text: action.text,
                    edited: false
                }
            ]
        case DELETE_TODO:
            return state.filter(todo => todo.id !== action.id);
        case EDIT_TODO:
            return state.map(todo => todo.id === action.id ? { ...todo, edited: !todo.edited } : todo);
        default:
            return state
    }

}

export default TodoReducer;