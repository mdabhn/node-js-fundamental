const {
  getAllLaunches,
  createNewLaunch,
} = require('../../models/launches.model')

function launchController(req, res) {
  res.status(200).json(getAllLaunches())
}

function addNewLaunch(req, res) {
  const data = req.body

  if (!data.mission || !data.rocket || !data.launchDate || !data.destination) {
    return res.status(400).json({
      error: 'Missing required launch property',
    })
  }

  data.launchDate = new Date(data.launchDate)
  if (data.launchDate.toString() === 'Invalid Date') {
    return res.status(400).json({
      error: 'Invalid Date Format',
    })
  }
  createNewLaunch(data)

  return res.status(201).json(data)
}

module.exports = {
  launchController,
  addNewLaunch,
}
