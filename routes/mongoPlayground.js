var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var mongoose = require('mongoose');
var User = mongoose.model('User');

// /* GET home page. */
router.get('/', function(req, res, next) {
    let randomNum = Math.floor(Math.random() * 1000)
    let user = new User({
        username: 'Kelsey',
        email: `kelsey${randomNum}@kelsey.com`,
        password: 'test'
    });
    user.save(function(err, returnUser){
      res.json(returnUser)
    })

    // res.json('Welcome to the playground');
});




module.exports = router;
