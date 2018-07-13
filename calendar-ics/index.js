const express = require('express')
const app = express()

const data = require('./data/events');
app.get('/', function (req, res) {
  res.send('Calendar ics')
})

app.get('/cal', function(req, res) {
  res.send(data)
});

app.listen(3000, function () {
  console.log('banzai')
})
