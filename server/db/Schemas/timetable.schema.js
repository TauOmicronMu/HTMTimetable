// grab the things we need
const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

// create a schema
const timetableSchema = new Schema({
  eventName: 'string',
  eventDesc: 'string',
  eventLocation: 'string',
  eventTime: 'string'
});

// the schema is useless so far
// we need to create a model using it
const Timetable = mongoose.model('timetable', timetableSchema);

// make this available to our users in our Node applications
module.exports = Timetable;
