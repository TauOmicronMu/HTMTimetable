// grab the things we need
const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

// create a schema
const workshopSchema = new Schema({
  workshopName: 'string',
  workshopDesc: 'string',
  workshopLocation: 'string',
  workshopTime: 'string',
  workshopType: 'string'
});

// the schema is useless so far
// we need to create a model using it
const Workshop = mongoose.model('workshop', workshopSchema);

// make this available to our users in our Node applications
module.exports = Workshop;
