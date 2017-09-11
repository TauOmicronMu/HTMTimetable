const db = require('../db/db.helper');

exports.getFaq = () => {
  //Get workshops
  return new Promise((resolve, reject) => {
    db.getFAQ()
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      })
  })
};

module.exports = exports;
