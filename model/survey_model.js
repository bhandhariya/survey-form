var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SurveySchema = new Schema({
   
   
    user_id:{type:Schema.Types.String},
    question1: {type:Schema.Types.Number},
    question2: {type:Schema.Types.Number},
    question3: {type:Schema.Types.Number},
    question4: {type:Schema.Types.Number},
    question5: {type:Schema.Types.Number},
    question6: {type:Schema.Types.Number},
    question7: {type:Schema.Types.Number},
    question8: {type:Schema.Types.Number},
    question9: {type:Schema.Types.Number},
    question10: {type:Schema.Types.Number},
    question11: {type:Schema.Types.Number},
    question12: {type:Schema.Types.Number},
    question13: {type:Schema.Types.Number},
    question14: {type:Schema.Types.Number},
    question15: {type:Schema.Types.Number},
    question16: {type:Schema.Types.Number},
    question17: {type:Schema.Types.Number},
    question18: {type:Schema.Types.Number},
    question19: {type:Schema.Types.Number},
    question20: {type:Schema.Types.Number},
    question21: {type:Schema.Types.Number},
    question22: {type:Schema.Types.Number},
    question23: {type:Schema.Types.Number},
    question24: {type:Schema.Types.Number},
    question25: {type:Schema.Types.Number},
    question26: {type:Schema.Types.Number},
    question27: {type:Schema.Types.Number},
    question28: {type:Schema.Types.Number},
    question29: {type:Schema.Types.Number},
    question30: {type:Schema.Types.Number},
    question31: {type:Schema.Types.Number},
    question32: {type:Schema.Types.Number},
    question33: {type:Schema.Types.Number},
    question34: {type:Schema.Types.Number},
    question35: {type:Schema.Types.Number},
    question36: {type:Schema.Types.Number},
    question37: {type:Schema.Types.Number},
    question38: {type:Schema.Types.Number}

});




module.exports = mongoose.model('Survey', SurveySchema);