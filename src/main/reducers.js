import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  todo: () => ({
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
  })
})

export default rootReducer