var express = require('express')
var app = express()
var fs = require('fs')
const quoteArray = fs.readFileSync('quotes.txt').toString().split("\n").filter(v=>v!=="");

app.get('/quote', function (req, res) {
    res.send({ "quote": quoteArray[Math.floor(Math.random() * quoteArray.length)]})
})

app.use(express.static('html'));
var server = app.listen(8000, function () {
    var host = server.address().address
    var port = server.address().port
    console.log('Express app listening at http://%s:%s', host, port)
})
