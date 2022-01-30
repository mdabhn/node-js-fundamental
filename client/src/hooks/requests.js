const API_URL = 'http://localhost:8000'

async function httpGetPlanets() {
  const res = await (await fetch(`${API_URL}/planets`)).json()
  return res
}

async function httpGetLaunches() {
  const response = await (await fetch(`${API_URL}/launches`)).json()
  return response.sort((a, b) => a.flightNumber - b.flightNumber)
}

async function httpSubmitLaunch(launch) {
  // TODO: Once API is ready.
  // Submit given launch data to launch system.
}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  // Delete launch with given ID.
}

export { httpGetPlanets, httpGetLaunches, httpSubmitLaunch, httpAbortLaunch }
