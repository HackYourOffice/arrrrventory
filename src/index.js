const express = require('express')
const app = express()

app.use(express.static('src/public'))

app.get('/api', (req, res) => res.send('hello api'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))



