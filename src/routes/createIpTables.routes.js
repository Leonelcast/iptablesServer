const routes = require('express').Router()
module.exports = (app) => {

    const {createIpTables} = require('../controller/createIpTable')(app)
    routes.post('/create/', createIpTables)
    
    
   
    return routes
}