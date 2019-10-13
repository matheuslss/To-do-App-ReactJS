import React, { Component } from 'react';
import PageHeader from '../../template/PageHeader'
import axios from 'axios'

import TodoForm from './TodoForm'
import TodoList from './TodoList'

const URL = 'http://localhost:3333/api/todos'

export default class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = { description: '', list: [] }

    this.handleAdd = this.handleAdd.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleRemove = this.handleRemove.bind(this)

    this.refresh()
  }

  handleAdd() {
    const description = this.state.description
    axios.post(URL, { description }).then(resp => this.refresh())
  }

  handleChange(event) {
    this.setState({ ...this.state, description: event.target.value })
  }

  handleRemove(todo) {
    axios.delete(`${URL}/${todo._id}`).then(resp => this.refresh())
  }

  refresh() {
    axios.get(`${URL}?sort=-createdAt`).then(resp => this.setState({ ...this.state, description: '', list: resp.data }))
  }

  render() {
    return (
      <div>
        <PageHeader name='Tarefas' small='Cadastro' />
        <TodoForm 
          description={ this.state.description }
          handleChange={ this.handleChange } 
          handleAdd={ this.handleAdd } 
        />
        <TodoList list={ this.state.list } 
          handleRemove={ this.handleRemove }
        />
      </div>
    )
  }
}
