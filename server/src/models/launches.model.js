const launches = new Map()

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

module.exports = {
  launches,
}
