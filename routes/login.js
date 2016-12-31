var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var mongoose = require('mongoose');
var User = mongoose.model('User');

// /* GET home page. */
router.get('/', function(req, res, next) {
  res.json('If the page reads this, it is connected!');
});



module.exports = router;
