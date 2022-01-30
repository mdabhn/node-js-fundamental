const { launches } = require('../../models/launches.model')

function launchController(req, res) {
  res.status(200).json(Array.from(launches.values()))
}

module.exports = launchController
