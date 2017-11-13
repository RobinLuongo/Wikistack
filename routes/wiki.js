const models = require('../models');
const express = require('express');
const router = express.Router();
const Page = models.Page;

router.get('/', (req, res, next) => {
  console.log("here");
	res.redirect('/');
})

router.post('/', (req, res, next) => {

	var page = Page.build({
    title: req.body.title,
    content: req.body.content,
  });
	page.save();
	res.send(req.body);
})

router.get('/add', (req, res, next) => {
  res.render('addpage');
})

router.get('/:article', (req, res, next) => {
  let toSend = Page.findAll({
    where: {
      urlTitle: req.params.article
    }
  }).then((page) => {
    res.json(page)
  })
  console.log("-----------" + toSend + "--------------");
  //res.json(toSend);
})

module.exports = router;
