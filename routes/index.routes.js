const express = require('express')

const controllers = require('../controllers/index.controller')

const router = express.Router()

router.get('/', controllers.index)

router.post('/add-todo', controllers.addTodos)

module.exports = router