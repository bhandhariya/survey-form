var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Survey2Schema = new Schema({
   
   
    user_id:{type:Schema.Types.String},
    q1: {type:Schema.Types.Number},
    q2: {type:Schema.Types.Number},
    q3: {type:Schema.Types.Number},
    q4: {type:Schema.Types.Number},
    q5: {type:Schema.Types.Number},
    q6: {type:Schema.Types.Number},
    q7: {type:Schema.Types.Number},
    q8: {type:Schema.Types.Number},
    q9: {type:Schema.Types.Number},
    q10: {type:Schema.Types.Number}

});




module.exports = mongoose.model('Survey2', Survey2Schema);