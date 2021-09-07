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

const indexRouter = require('./routes/index.routes')

app.use('/', indexRouter)

app.listen(
    config.PORT,
    config.HOSTNAME
)