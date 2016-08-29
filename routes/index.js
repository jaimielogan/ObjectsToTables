var express = require('express');
var router = express.Router();

var data = require("../data/data.js");

data = data.all;

var keys = Object.keys(data[0]);
keys = keys.splice(0,3);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { data: data,
keys: keys });
});

module.exports = router;
