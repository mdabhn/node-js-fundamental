const express = require('express')
const morgan = require('morgan')
const path = require('path')
const cors = require('cors')

const app = express()
const planetRouter = require('./routes/planets/planets.router')
const launchRouter = require('./routes/launches/launches.route')

app.use(express.json())

app.use(express.static(path.join(__dirname, '..', 'public')))

app.use(cors())
app.use(morgan('combined'))

app.get('/*', (_, res) => {
  res.send(path.join(__dirname, '..', 'public', 'index.html'))
})

app.use(planetRouter)
app.use(launchRouter)

module.exports = app
