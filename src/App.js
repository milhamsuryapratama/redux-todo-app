import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//components
import InputToDo from './components/InputToDo';
import DisplayTodo from './components/DisplayTodo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>To Do App</h2>
        <InputToDo />
        <br/>
        <br/>
        <DisplayTodo/>
      </div>
    );
  }
}

export default App;
