const express = require('express')
var request = require("request");
const app = express()

app.get('/', function (req, res) {
    
    request("http://api.openweathermap.org/data/2.5/forecast?id="+req.query.id+"&&APPID=2858d62c90078157cddb84347d8430a2", function(error, response, body) {
        res.json(JSON.parse(body));
    });

})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})