const ics = require('ics');
const { writeFileSync } = require('fs');

const data = require('../data/events');

const repository = {
  getCalendar: async () => {
    return new Promise(resolve => {
      ics.createEvent(data[0], (err, value) => {
        if(err) {
          console.log(err);
        };
        writeFileSync(`./event.ics`, value);
        resolve(value);

      })
    })
  },
  getOneEvent: function(index) {
    return data[index];
  }
}

module.exports = repository