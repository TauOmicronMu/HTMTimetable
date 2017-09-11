// grab the things we need
const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

// create a schema
const faqSchema = new Schema({
  title: 'string',
  text: 'string',
  type: 'string'
});

// the schema is useless so far
// we need to create a model using it
const FAQ = mongoose.model('faqs', faqSchema);

// make this available to our users in our Node applications
module.exports = FAQ;
