var express = require('express');
const tumblrConstants  = require('../constants/tumblr');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('tumblr/index.html');
});

router.get('/fetch', (req, res, next) => {
  let accountName = req.query.accountName
  let tumblrScriptUrl = tumblrConstants.tumblrAPIPaths.GET_POST(accountName);
  res.render(`tumblr/searchData/searchData.html`, {accountName, tumblrScriptUrl});
})

module.exports = router;
