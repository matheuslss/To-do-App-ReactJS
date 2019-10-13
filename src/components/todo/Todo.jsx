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
  }

  handleAdd() {
    const description = this.state.description
    axios.post(URL, { description }).then(resp => console.log('Funcionou'))
  }

  handleChange(event) {
    this.setState({ ...this.state, description: event.target.value })
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
        <TodoList />
      </div>
    )
  }
}
