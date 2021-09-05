const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()


app.set('port', process.env.PORT || 5000)
app.use(morgan('dev'))
app.use(cors());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    next();
});
app.use('/api', require('./routes/getIpTables.routes')(app));
app.use('/api', require('./routes/createIpTables.routes')(app));

module.exports = app