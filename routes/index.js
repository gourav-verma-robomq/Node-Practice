var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json('/../views/index.html');
});

const getPromise = () => {
  return new Promise((resolve, reject) => {
    let date =  new Date();
    if(date.valueOf() % 2 === 0 ) {
      return resolve("you are in safe zone");
    } else {
      return reject('odd zone');
    }
  })
}


router.get('/test', (req, res, next) => {


  getPromise().then(console.log).catch(console.log);

  res.send({a : 10, b: 3});

})

module.exports = router;
