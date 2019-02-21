import React, { Component, Fragment } from "react";
import { deleteTodo, editTodo, setVisibilityFilter } from '../actions/actionsCreators';
import { SHOW_ALL } from '../actions/actionsTypes';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class DisplayTodo extends Component {

    render() {
        return (
            <Fragment>
                <h2>Jumlah : {this.props.todos.length}</h2>
                {this.props.todos.length > 0 ? (
                    this.props.todos.map(todos => {
                        return <div key={todos.id}>{todos.text}  <button onClick={() => this.props.editTodo(todos.id)}>Edit</button> <button onClick={() => this.props.deleteTodo(todos.id)}>Hapus</button></div>
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
        default:
            return todos
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
        editTodo,
        setVisibilityFilter
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodo);