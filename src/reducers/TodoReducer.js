import { ADD_TODO, DELETE_TODO } from '../actions/actionsTypes';

const initialState = [];

const TodoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state, {
                    id: action.id,
                    text: action.text,
                    completed: false,
                }
            ]
        case DELETE_TODO:
            const id = action.id;
            return state.filter(todo => todo.id !== id);
        default:
            return state;
    }

}

export default TodoReducer;