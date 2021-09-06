const express = require('express');
const config = require('./config');
const data = require('./objects/data.objects')

const morgan = require('./middleware/standard.morgan.middleware')
const expressJson = require('./middleware/standard.expressJson.middleware')
const expressUrlEncoded = require('./middleware/standard.expressUrlEncoded.middleware')

const app = express();

// Settings
app.set('views', './views')
app.set('view engine', 'pug')

// Middleware
app.use(morgan)
app.use(expressJson)
app.use(expressUrlEncoded)

// Route Handlers

app.get('/', (req, res, next) => {
    const fakeTodos = data.todoItems;
    res.render('index.pug', {todoData: fakeTodos})
})

app.post('/add-todo', (req, res, next) => {
    const requestBody = req.body
    data.todoItems.push(requestBody)
    res.redirect('/')
})

app.listen(
    config.PORT,
    config.HOSTNAME
)