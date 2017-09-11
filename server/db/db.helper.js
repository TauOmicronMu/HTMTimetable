const mongoose = require('mongoose'),
  schema = require('./Schemas/db.schema'),
  Schema = mongoose.Schema;

//Schemas
let Timetable = require('../db/Schemas/timetable.schema'),
  Workshop = require('../db/Schemas/workshop.schema'),
  FAQ = require('../db/Schemas/faq.schema');


exports.getTimetable = () => {
  return new Promise((resolve, reject) => {
    Timetable.find({}, (err, data) => {
      if(err) reject(err);
      resolve(data);
    })
  });
};

// exports.createTimetableEvent = (eventName, eventDesc, eventLocation, eventTime) => {
//   return new Promise((resolve, reject) => {
//     let event = new Timetable({
//       eventName,
//       eventDesc,
//       eventLocation,
//       eventTime
//     });
//
//     event.save((err) => {
//       if(err) reject (err);
//       resolve('Event created.');
//     })
//   })
// };

exports.getWorkshops = () => {
  return new Promise((resolve, reject) => {
    Workshop.find({}, (err, result) => {
      if(err) reject(err);
      resolve(result);
    })
  })
};

exports.getFAQ = () => {
  return new Promise((resolve, reject) => {
    FAQ.find({}, (err, result) => {
      if(err) reject(err);
      resolve(result);
    })
  })
};

module.exports = exports;
