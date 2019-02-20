import { ADD_TODO } from '../actions/actionsTypes';

const initialState = [
    {id: 1, text: "Makan", completed: false}
];

const TodoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        default:
            return state;
    }
}

export default TodoReducer;