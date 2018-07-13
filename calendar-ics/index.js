const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Calendar ics')
})

app.get('/cal', function(req, res) {

});

app.listen(3000, function () {
  console.log('banzai event')
})
