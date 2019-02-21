import React, { Component } from 'react';
import { addTodo } from '../actions/actionsCreators';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';

class InputToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
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
                <ButtonDua onClick={() => { this.props.addTodo(this.state.text); this.setState({ text: '' }) }}>Submit</ButtonDua>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addTodo
    }, dispatch)
}

const InputDua = styled.input`
    width: 250px;
    height: 40px;
    text-align: center;
`;

const ButtonDua = styled.button`
    width: 100px;
    height: 45px;
    cursor: pointer;
`;

export default connect(null, mapDispatchToProps)(InputToDo);