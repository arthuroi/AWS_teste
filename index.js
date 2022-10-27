const express = require('express')
const app = express()
const PORT = 8000
app.post('/teste', (req, res) => {
    try {
        res.send(200)
    } catch (error) {
        console.log(error)
    }
})
app.listen(PORT, () => {console.log('Listening...')})