import React from 'react'
import Grid from '../../template/Grid'
import IconButton from '../../template/IconButton'

export default props => (
  <div role='form' className='todoForm'>
    <Grid cols="12 9 10 11">
        <input 
          id="description" 
          className="form-control"
          placeholder="Adicione uma tarefa"/>
    </Grid>
    <Grid cols="12 3 2 1">
        <IconButton style="primary"icon="plus" 
        onClick={ props.handleAdd }/>
    </Grid>  
  </div>
)
