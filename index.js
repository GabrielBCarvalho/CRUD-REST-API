const express = require('express')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(require('./routes/index.routes'))

// Test route
app.get('/', (
    req, res) => {
        res.json({messsage: 'HelloWorld'})
    }
)

// Start server
app.listen('1337')