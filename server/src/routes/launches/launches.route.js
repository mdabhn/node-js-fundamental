const launchController = require('./launches.controller')

const LauncRoute = require('express').Router()

LauncRoute.get('/launches', launchController)

module.exports = LauncRoute
