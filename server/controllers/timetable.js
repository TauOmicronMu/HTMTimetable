const db = require('../db/db.helper');

exports.getTimetable = () => {
  //Get workshops
  return new Promise((resolve, reject) => {
    db.getTimetable()
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

exports.addTimetableEvent = () => {
  return new Promise((resolve, reject) => {
    db.createTimetableEvent('Test', 'bleh', 'Somewhere', '12:00')
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      })
  });
};

module.exports = exports;
