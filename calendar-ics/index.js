const express = require('express')
const app = express()

const calendarRepository = require ('./domain/calendar');

app.get('/', function (req, res) {
  res.send('Calendar ics')
})

app.get('/cal', async function(req, res) {
  const calendar = await calendarRepository.getCalendar();
  console.log('calendar', calendar);
  res.send(calendar);
});

app.listen(3000, function () {
  console.log('banzai')
})
