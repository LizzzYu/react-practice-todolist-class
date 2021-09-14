import React, { Component } from 'react';
import Title from './components/Title';
import Form from './components/Form';
import List from './components/List';
import './App.css';
class App extends Component {
  constructor() {
    super();

    let list = [
      {
        id: 0,
        text: '吃早餐'
      },
      {
        id: 1,
        text: '到公司'
      },
      {
        id: 2,
        text: '吃午餐'
      }
    ];
    
    this.state = {
      todos: list,
      startId: 3,
    }
  }

  createTodo(text) {
    this.setState({
      todos: [...this.state.todos, {
        id: this.state.startId,
        text: text
      }],
      startId: this.state.startId + 1
    })
  }

  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id),
    })
  }

  render() {
    return (
      <div>
        <Title todos={this.state.todos} />
        <Form createTodo={text => this.createTodo(text)} />
        <List
          todos={this.state.todos}
          removeTodo={id => this.removeTodo(id)} />
      </div>
    );
  }
}

export default App;
