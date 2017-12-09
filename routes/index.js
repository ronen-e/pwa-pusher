var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('*', function(req, res, next) {
  res.render('index.html');
});

router.post('/api/signup', function(req, res, next) {
  res.send(req.body)
})

module.exports = router;
