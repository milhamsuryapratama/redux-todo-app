import { ADD_TODO, DELETE_TODO, EDIT_TODO, GET_EDITED } from '../actions/actionsTypes';

const initialState = [];

const TodoReducer = (state = initialState, action) => {
    let edited;
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state, {
                    id: action.id,
                    text: action.text,
                    edited: false,
                }
            ]
        case DELETE_TODO:
            const id = action.id;
            return state.filter(todo => todo.id !== id);
        case EDIT_TODO:
            //code here
            const ids = action.id;
            edited = state.filter(todo => todo.id === ids);
            console.log(edited)
            return state
        case GET_EDITED:
            return edited;
        default:
            return state
    }

}

export default TodoReducer;