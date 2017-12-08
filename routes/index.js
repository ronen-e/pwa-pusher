var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('*', function(req, res, next) {
  res.render('index.html');
});

router.post('/signup', function(req, res, next) {
  const email = req.params.email;
  // console.log('params', req.params)
  // console.log('email', req.email)
  res.send(email)
})

module.exports = router;
