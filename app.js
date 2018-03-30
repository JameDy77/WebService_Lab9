const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const subjectRoutes = require('./api/routes/subjects');
const studentRoutes = require('./api/routes/students');

app.use('/subjects', subjectRoutes);
app.use('/students', studentRoutes);

app.use((req, res, next) => {
   const error = new Error('Not found');
   error.status = 404;
   next(error);
})

app.use((error, req, res, next) => {
   res.status(error.status || 500);
   res.json({
       error: {
           message: error.message
       }
   });
});

module.exports = app;