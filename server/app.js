const express = require('express'),
  app = express(),
  timetable = require('./controllers/timetable'),
  workshops = require('./controllers/workshops'),
  faq = require('./controllers/faq'),
  mongoose = require('mongoose');

/*
  Setup Mongo Connection
 */
mongoose.connect('mongodb://alexwiley:mGit4lyfe@ds133054.mlab.com:33054/htm-timetable');
mongoose.Promise = global.Promise;

app.get('/timetable', (req, res) => {
  timetable.getTimetable()
    .then((data) => {
    res.send(data);
    })
});

app.post('/timetable', (req, res) => {
  timetable.addTimetableEvent()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    })
});

app.get('/workshops', (req, res) => {
  workshops.getWorkshops()
    .then((data) => {
      res.send(data);
    })
});

app.get('/faq', (req, res) => {
  faq.getFaq()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

const port = 9000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});

