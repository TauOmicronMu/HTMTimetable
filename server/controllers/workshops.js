const db = require('../db/db.helper');

exports.getWorkshops = () => {
  //Get workshops
  return new Promise((resolve, reject) => {
    db.getWorkshops()
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  })
};

module.exports = exports;
