const routes = require('express').Router()
module.exports = (app) => {

    const {createIpTableOutputs, createIpTableInputs, createIpTableForwards} = require('../controller/createIpTable')(app)
    routes.post('/createOutput/', createIpTableOutputs)
    routes.post('/createInput/', createIpTableInputs)
    routes.post('/createForward/', createIpTableForwards)
    
    
   
    return routes
}