const express = require('express');
const app = express();


const subjectRoutes = require('./api/routes/subjects');
const studentRoutes = require('./api/routes/students');


app.use('/subjects', subjectRoutes);
app.use('/students', studentRoutes);


module.exports = app;
