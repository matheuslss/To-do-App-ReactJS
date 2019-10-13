import React from 'react'
import Grid from '../../template/Grid'

export default props => (
  <div role='form' className='todoForm'>
    <Grid cols="12 9 10 11">
        <input 
          id="description" 
          className="form-control"
          placeholder="Adicione uma tarefa"/>
    </Grid>
    <Grid cols="12 3 2 1">
        <button className="btn btn-primary">
          <i className="fa fa-plus"></i>
        </button>
    </Grid>  
  </div>
)
