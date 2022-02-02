const launches = new Map()

const _id = 100

const launch = {
  flightNumber: 100,
  mission: 'Keplar Exploration X',
  rocket: 'Explorer IS1',
  lunchDate: new Date('December 21, 2030'),
  destination: 'kepler-442 b',
  customer: ['HOX', 'NASA'],
  upcoming: true,
  success: true,
}

launches.set(launch.flightNumber, launch)

function getAllLaunches() {
  return Array.from(launches.values())
}

function createNewLaunch(launch) {
  _id++
  launches.set(
    _id,
    Object.assign(launch, {
      flightNumber: _id,
      upcoming: true,
      customer: ['hossain', 'NASA'],
      success: true,
    })
  )
}

module.exports = {
  getAllLaunches,
  createNewLaunch,
}
