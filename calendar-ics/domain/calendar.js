const ics = require('ics');
const { writeFileSync } = require('fs');

const data = require('../data/events');

const repository = {
  getCalendar: async () => {
    return new Promise(resolve => {
      const indexEvent = 0;
      const filename = `event_${indexEvent}.ics`
      const path = `/files/${filename}`;
      ics.createEvent(data[indexEvent], (err, value) => {
        if(err) {
          console.log(err);
        };
        writeFileSync('.' + path, value);
        resolve({
          filename,
          path
        });
      })
    })
  },
  getOneEvent: function(index) {
    return data[index];
  }
}

module.exports = repository