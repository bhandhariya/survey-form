var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
   
    _id:{type:Schema.Types.ObjectId,required:true},
    name:{type:Schema.Types.String,required:true},
    number:{type:Schema.Types.Number,required:true,unique:true},
    email:{type:Schema.Types.String},
    date:{type:Schema.Types.Date},
    dob:{type:Schema.Types.Date},
    sex:{type:Schema.Types.String},
    education:{type:Schema.Types.String},
    profession:{type:Schema.Types.String},
    married:{type:Schema.Types.String},
    area:{type:Schema.Types.String},
    createdAt:{type:Schema.Types.Date}

},{
    toJSON:{virtuals:true},
    toObject:{virtuals:true}
});


UserSchema.virtual('SureveyDetails',{
    ref:'Survey',
    localField: '_id',
    foreignField: 'user_id',
    justOne: false
})


UserSchema.virtual('Surevey2Details',{
    ref:'Survey2',
    localField: '_id',
    foreignField: 'user_id',
    justOne: false
})


module.exports = mongoose.model('User', UserSchema);