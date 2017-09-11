const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

exports.timetableSchema = new Schema({
  eventName: 'string',
  eventDesc: 'string',
  eventLocation: 'string',
  eventTime: 'string'
});

exports.workshopSchema = new Schema({
  workshopName: 'string',
  workshopDesc: 'string',
  workshopLocation: 'string',
  workshopTime: 'string',
  workshopType: 'string'
});

exports.faqSchema = new Schema({
  title: 'string',
  text: 'string',
  type: 'string'
});


module.exports = exports;
