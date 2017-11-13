const models = require('../models');
const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
  console.log("here");
	res.redirect('/');
})

router.post('/', (req, res, next) => {
	res.send('post something');
})
router.get('/add', (req, res, next) => {
  res.render('addpage');
})
module.exports = router;
