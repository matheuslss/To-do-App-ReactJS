import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'

import React from 'react'
import Todo from '../components/todo/Todo'
import About from '../components/about/About'

export default props => (
  <div className="container">
    <Todo />
    <About />
  </div>
)