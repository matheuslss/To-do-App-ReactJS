import React from 'react'
import Grid from '../../template/Grid'
import IconButton from '../../template/IconButton'

export default props => (
  <div role='form' className='todoForm'>
    <Grid cols="12 9 10">
        <input 
          value={ props.description }
          onChange={ props.handleChange }
          id="description" 
          className="form-control"
          placeholder="Adicione uma tarefa"/>
    </Grid>
    <Grid cols="12 3 2">
        <IconButton style="primary"icon="plus" 
        onClick={ props.handleAdd }/>
        <IconButton style="info"icon="search" 
        onClick={ props.handleSearch }/>
        <IconButton style="default"icon="close" 
        onClick={ props.handleClear }/>
    </Grid>  
  </div>
)
