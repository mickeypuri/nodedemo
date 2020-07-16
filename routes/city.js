var express = require('express');
var router = express.Router();
var bpdts = require('../services/bpdtsService');

/* GET city users listing. */
router.get('/:city', async function(req, res, next) {
  let error = false;
  let users = null;
  let hasResults = false;
  try {
    users = await bpdts.getUsersInCity(req.params.city);
    console.log(users);
    if (users.length > 0) {
        hasResults = true;
    }
  }
  catch(error) {
      error = true;
  }
  res.render('city', { title: req.params.city, error, users, hasResults });

});

module.exports = router;
