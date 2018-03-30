const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
   res.status(200).json({
       message: 'Handling GET requests to /subjects'
   });
});


router.post('/', (req, res, next) => {
   res.status(201).json({
       message: 'Handling POST requests to /subjects'
   });
});


router.get('/:subjectId', (req, res, next) => {
   const id = req.params.subjectId;
   if (id === '887434') {
       res.status(200).json({
           message: 'Web Service Technology',
           id: id
       });
   } else {
       res.status(200).json({
           message: 'You passed an ID'
       });
   }
});


router.patch('/:sujectId', (req, res, next) => {
   res.status(200).json({
       message: 'Updated subject!'
   });
});


router.delete('/:sujectId', (req, res, next) => {
   res.status(200).json({
       message: 'Deleted subject!'
   });
});


module.exports = router;
