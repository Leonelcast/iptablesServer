const routes = require('express').Router()
module.exports = (app) => {

    const {AllIptables} = require('../controller/getIpTable')(app)
    routes.get('/allIp/', AllIptables)
    
   
    return routes
}