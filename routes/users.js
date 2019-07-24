var express = require('express');
var router = express.Router();
var UserCOntroller=require('../controller/user_controller');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/create',UserCOntroller.create);

router.post('/firstsurvey',UserCOntroller.firstSurvey);

module.exports = router;
