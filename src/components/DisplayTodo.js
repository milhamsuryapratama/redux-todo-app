import React, {Component} from "react";
import {DISPLAY_TODO, setVisibilityFilter} from '../actions/actionsCreators';
import {SHOW_ALL} from '../actions/actionsTypes';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class DisplayTodo extends Component {

    render() {
        return (
            <ul>
                {this.props.todos.map(todo => (
                    <li>{todo.text}</li>
                ))}
            </ul>
        )
    }

}

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case SHOW_ALL:
            return todos;
        default:
            return todos;
    }
}

const mapStateToProps = state => {
    return {todos: getVisibleTodos(state.todos, state.visibilityFilter),
        visibilityFilter: state.visibilityFilter
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        setVisibilityFilter
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodo);