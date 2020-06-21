const express = require('express')
require('dotenv').config()

const app = express()

app.use(express.static('public'))
app.set('view engine', 'ejs')

module.exports = function() {
    app.get('/', (req, res) => {
        res.render('main', {apiKey : process.env.API_KEY})
    })

    return app
}



