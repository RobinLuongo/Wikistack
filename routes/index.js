const models = require('../models');
const express = require('express');
const router = express.Router();
const wiki = require('./wiki.js');
const user = require('./user.js');
const Page = models.Page;


router.use('/wiki', wiki);

router.use('/', (req,res,next) => {
	Page.findAll()
	.then((pages) => {
		res.render('index', {
			
		})
	})
})
module.exports = router;
