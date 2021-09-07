const data = require('../objects/data.objects')

function index(req, res, next) {
    const fakeTodos = data.todoItems;
    res.render('index.pug', {todoData: fakeTodos})
}

function addTodos(req, res, next) {
    const requestBody = req.body
    data.todoItems.push(requestBody)
    res.redirect('/')
}

module.exports = {
    index: index,
    addTodos: addTodos,
}