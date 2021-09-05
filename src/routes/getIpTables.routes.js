const routes = require('express').Router()
module.exports = (app) => {

    const {getInterface, getOutput, getForward, getInput} = require('../controller/getIpTable')(app)
    routes.get('/interfaces/', getInterface)
    routes.get('/output/', getOutput)
    routes.get('/forward/', getForward)
    routes.get('/input/', getInput)
    
   
    return routes
}