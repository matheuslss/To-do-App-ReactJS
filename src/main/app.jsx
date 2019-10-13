import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'

import React from 'react'
import {Router, Route, Redirect, hashHistory } from 'react-router'
import Todo from '../components/todo/Todo'
import About from '../components/about/About'
import Menu from '../template/Menu'

export default props => (
  <div className="container">
    <Menu />
    <Router history={ hashHistory }>
      <Route path='/todos' component={ Todo } />
      <Route path='/about' component={ About } />
      <Redirect from='*' to='/todos' />
    </Router>
  </div>
)