import React, { Component } from 'react';
import { addTodo } from '../actions/actionsCreators';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

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
                <input
                    type="text"
                    value={this.state.text}
                    onChange={this.handleChange.bind(this)}
                    placeholder="Input Something"
                />
                <br /> <br />
                <button onClick={() => { this.props.addTodo(this.state.text) }}>Submit</button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addTodo
    }, dispatch)
}

export default connect(null,mapDispatchToProps)(InputToDo);