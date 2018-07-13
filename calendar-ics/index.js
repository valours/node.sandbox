const express = require('express')
const app = express()

const calendarRepository = require ('./domain/calendar');

app.get('/', function (req, res) {
  res.send('Calendar ics')
})

app.get('/cal', async function(req, res) {
  const calendar = await calendarRepository.getCalendar();
  console.log('calendar', calendar);
  const { filename } = calendar;
  const options = {
    root: __dirname + '/files/',
  }
  console.log(filename);
  res.sendFile(__dirname + '/files/' + filename);
});

app.listen(3000, function () {
  console.log('banzai')
})
