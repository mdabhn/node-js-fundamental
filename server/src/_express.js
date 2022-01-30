const express = require('express')
const cors = require('cors')
const app = express()
const planetRouter = require('./routes/planets/planets.router')

app.use(cors())

app.use(express.json())
app.use(planetRouter)

module.exports = app
