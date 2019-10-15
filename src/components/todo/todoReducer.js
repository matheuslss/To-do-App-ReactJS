const INICIAL_STATE = {
  description: 'Estudar',
  list: [{
    _id: 1,
    description: 'Estudar react native',
    done: true
  }, {
    _id: 2,
    description: 'Estudar golang',
    done: false
  }, {
    _id: 3,
    description: 'Estudar mobx',
    done: true
  }]
}

export default (state = INICIAL_STATE, action) => {
  switch(action.type) {
    case 'DESCRIPTION_CHANGED' : 
      return { ...state, description: action.payload }
    default:
      return state
  }
}