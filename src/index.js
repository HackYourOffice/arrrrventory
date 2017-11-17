var express = require('express');
var request = require('request');
var config = require('../config.json');
const app = express()

app.use(express.static('src/public'));


app.get('/api/:id', (req, res) => {
    request.get(config.inventory_url + '/hardware/' + req.params.id, {
            method: 'GET',
            auth: {
                'bearer': config.inventory_token,
            },
            accept: 'application/json'


        },
        function (err, response, body) {
            res.send(body);

        })
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))



