const ics = require('ics');
const data = require('../data/events');

const repository = {
  getCalendar: async () => {
    return new Promise(resolve => {
      ics.createEvents(data, (err, value) => {
        if(err) {
          console.log(err);
        };
        resolve({
          value
        });
      })
    })
  },
  getOneEvent: function(index) {
    return data[index];
  }
}

module.exports = repository