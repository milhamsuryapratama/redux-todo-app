import React, { Component } from 'react';
import { addTodo, setVisibilityFilter } from '../actions/actionsCreators';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
// import { SHOW_ALL, EDITED } from '../actions/actionsTypes';

class InputToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    componentWillReceiveProps(nextProps) {
        nextProps.todos.map(todo => {
            this.setState({
                text: todo.text
            })
        })
        console.log(nextProps);
    }

    handleChange(e) {
        this.setState({
            text: e.target.value
        })
    }

    render() {
        return (
            <div>
                <InputDua
                    value={this.state.text}
                    onChange={this.handleChange.bind(this)}
                    placeholder="Input Something" />
                <ButtonDua onClick={() => { this.state.text !== "" ? this.props.addTodo(this.state.text) : alert("Isi Dulu Bro"); this.setState({ text: '' }) }}><strong>Submit</strong></ButtonDua>
            </div>
        );
    }
}

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        default:
            return todos.filter(todo => todo.edited);
    }
};

const mapStateToProps = state => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter),
        visibilityFilter: state.visibilityFilter
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addTodo
    }, dispatch)
}

const InputDua = styled.input`
    width: 250px;
    height: 40px;
    text-align: center;
    letter-spacing: 4px;
`;

const ButtonDua = styled.button`
    width: 100px;
    height: 46px;
    cursor: pointer;
    letter-spacing: 2px;
`;

export default connect(mapStateToProps, mapDispatchToProps)(InputToDo);