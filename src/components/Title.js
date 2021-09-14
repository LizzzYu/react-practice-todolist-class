import React, { Component } from 'react'

export default class Title extends Component {
  render() {
    return (
      <h2>待辦事項清單({this.props.todos.length})</h2>
    )
  }
}
