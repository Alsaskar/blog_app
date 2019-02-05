const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

app.use(bodyParser.json({limit:'50mb'}))
app.use(bodyParser.urlencoded({extended: false, limit:'50mb'}))
app.use(morgan('dev'))
app.use(cors({
    origin: 'http://localhost:8080',
    credentials: true
}))

// routes
app.use('/user', require('./routes/auth'))
app.use('/dashboard', require('./routes/dashboard'))

app.listen(3000)