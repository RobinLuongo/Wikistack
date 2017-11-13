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
  let toSend = Page.findOne({
    where: {
      urlTitle: req.params.article
    }
  }).then((page) => {
    res.render('wikipage', {
      title: page.title,
      content: page.content
    })
  }).catch((err) => console.error(err));
  //res.json(toSend);
})

module.exports = router;
