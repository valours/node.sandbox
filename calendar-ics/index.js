const express = require('express');
const app = express();
const { writeFileSync } = require('fs')


const calendarRepository = require ('./domain/calendar');

app.get('/', function (req, res) {
  res.send('Calendar ics')
})

app.get('/cal.ical', async function(req, res) {
  const calendar = await calendarRepository.getCalendar();
  res.set('Content-Type', 'text/calendar;charset=utf-8');
  res.send(calendar.value);
});

app.listen(3000, function () {
  console.log('banzai')
})
