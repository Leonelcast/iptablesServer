const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()


app.set('port', process.env.PORT || 5000)
app.use(morgan('dev'))
app.use(cors());
app.use('/api', require('./routes/getIpTables.routes')(app));
app.use('/api', require('./routes/createIpTables.routes')(app));
app.use('/api', require('./routes/deleteIpTables.routes')(app));

module.exports = app