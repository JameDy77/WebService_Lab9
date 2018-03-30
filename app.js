const express = require('express');
const app = express();


const subjectRoutes = require('./api/routes/subjects');


app.use('/subjects', subjectRoutes);


module.exports = app;
