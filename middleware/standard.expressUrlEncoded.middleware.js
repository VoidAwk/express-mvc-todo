const express = require('express')

const middleware = express.urlencoded({extended: true})

module.exports = middleware