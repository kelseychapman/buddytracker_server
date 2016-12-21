var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var bcrypt = require('bcrypt');

// /* GET home page. */
router.get('/', function(req, res, next) {
  res.json('YarnTail');
});



module.exports = router;
