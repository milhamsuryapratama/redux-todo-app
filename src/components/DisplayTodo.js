import React, { Component, Fragment } from "react";
import { deleteTodo, setVisibilityFilter, editTodo, toogleTodo } from '../actions/actionsCreators';
import { SHOW_ALL, EDITED, COMPLETED, ACTIVE } from '../actions/actionsTypes';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class DisplayTodo extends Component {

    // componentWillReceiveProps(nextProps) {
    //     console.log(nextProps)
    // }

    render() {
        // <button onClick={() => this.props.editTodo(todos.id)}>Edit</button> | <button onClick={() => this.props.setVisibilityFilter(EDITED, todos.id)}>Edit</button>
        return (
            <Fragment>
                <button onClick={() => this.props.setVisibilityFilter(SHOW_ALL)}>All</button> | <button onClick={() => this.props.setVisibilityFilter(COMPLETED)}>Completed</button> | <button onClick={() => this.props.setVisibilityFilter(ACTIVE)}>Active</button>
                <h2>Jumlah : {this.props.todos.length}</h2>
                {this.props.todos.length > 0 ? (
                    this.props.todos.map(todos => {
                        return <Fragment><br /><div key={todos.id}>{todos.completed === true ? <strike>{todos.text}</strike> : todos.text}  <button onClick={() => this.props.toogleTodo(todos.id)}>Completed</button> | <button onClick={() => this.props.deleteTodo(todos.id)}>Hapus</button></div></Fragment>
                    })
                ) : (
                        <div>Kosong</div>
                    )}
            </Fragment>
        )
    }

}

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case SHOW_ALL:
            return todos;
        case EDITED:
            return todos;
        case COMPLETED:
            return todos.filter(todo => todo.completed);
        case ACTIVE:
            return todos.filter(todo => !todo.completed);
        default:
            throw new Error("Unknown filter: " + filter);
    }
};

const mapStateToProps = state => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter),
        visibilityFilter: state.visibilityFilter
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        deleteTodo,
        setVisibilityFilter,
        editTodo,
        toogleTodo
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodo);