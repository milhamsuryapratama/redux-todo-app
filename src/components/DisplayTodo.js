import React, { Component } from "react";
import { setVisibilityFilter, deleteTodo } from '../actions/actionsCreators';
import { SHOW_ALL } from '../actions/actionsTypes';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class DisplayTodo extends Component {

    render() {
        return (
            <ul>
                {this.props.todos.length > 0 ? (
                    this.props.todos.map(todo => {
                        return <li key={todo.id}>{todo.text} {' '} <button onClick={() => this.props.deleteTodo(todo.id)}>Hapus</button></li>
                    })
                ) : (
                        <li>Kosong</li>
                    )}
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
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter),
        visibilityFilter: state.visibilityFilter
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        setVisibilityFilter,
        deleteTodo
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodo);