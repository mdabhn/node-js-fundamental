const { launchController, addNewLaunch } = require('./launches.controller')

const LauncRoute = require('express').Router()

LauncRoute.get('/launches', launchController)
LauncRoute.post('/launches', addNewLaunch)

module.exports = LauncRoute
