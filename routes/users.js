var express = require('express');
var router = express.Router();
var UserCOntroller=require('../controller/user_controller');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/create',UserCOntroller.create);

router.post('/firstsurvey',UserCOntroller.firstSurvey);

router.post('/survey2',UserCOntroller.survey2);

router.get('/getAllUSers',UserCOntroller.getAllUSers);

router.get('/getCount',UserCOntroller.getCount);

router.get('/getFirstSurveyData',UserCOntroller.getFirstSurveyData);



module.exports = router;
