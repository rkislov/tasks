const express = require('express')
const bodyparser = require('body-parser')
const authRoutes = require('./routes/auth')
const analiticRoutes = require('./routes/analitic')
const categoryRoutes = require('./routes/category')
const taskRoutes = require('./routes/auth')
const app = express()

app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())

app.use('/api/auth', authRoutes)
app.use('/api/analitic', analiticRoutes)
app.use('/api/category', categoryRoutes)
app.use('/api/order', taskRoutes)


module.exports = app