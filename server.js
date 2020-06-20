const express = require('express')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 3030

app.use(express.static('public'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('main', {apiKey : process.env.API_KEY})
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})