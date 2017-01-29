var express = require('express')
var app = express()
var bodyParser = require('body-parser');


app.use("/", express.static('client'))
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.post("/shoes", function(req, res) {
  console.log(req.body.creditc)
  console.log(req)
  res.send(`NO SHOES HERE but heres your credit card info: `)
})

app.listen(process.env.PORT, function () {
  console.log('Example app listening on port ' + process.env.PORT)
})