const routes = require('express').Router()
module.exports = (app) => {

  const {deleteIpTables} = require('../controller/deleteIpTable')(app)
  routes.post('/deleteAll/', deleteIpTables)
  
    
   
    return routes
}