const http = require('http')
const { loadData } = require('./models/planets.model')
const _app = require('./_express')

const PORT = process.env.PORT || 8000

const server = http.createServer(_app)

async function startServer() {
  await loadData()
  server.listen(PORT)
}

startServer()
