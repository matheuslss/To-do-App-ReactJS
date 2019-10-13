const Todo = require('./todo')

Todo.methods(['get', 'post', 'put', 'delete'])
Todo.updateOptions({
  new: true, //retorna o registro atualizado
  runValidators: true //força a validacao dos dados do model
})

module.exports = Todo