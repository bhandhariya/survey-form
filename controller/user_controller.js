var User=require('../model/user_model');
var Survey=require('../model/survey_model');
var Survey2=require('../model/survey_2_model')
var mongoose=require('mongoose');

exports.create=function(req,res){
    var data=req.body;
    console.log(data);
    var user=new User({
        _id:new mongoose.Types.ObjectId,
        name:data.name,
        number:data.number,
        email:data.email,
        date:data.date,
        dob:data.dob,
        sex:data.sex,
        education:data.education,
        profession:data.profession,
        married:data.maried,
        area:data.area,
        createdAt:Date.now()
    })
    user.save(function(err,result){
        if(!err && result){
            res.send(result)
        }else if(err.name === 'MongoError' && err.code === 11000){
            res.send(err)
        }
        else{
            console.log(err)
        }
    })
}

exports.firstSurvey=function(req,res){
var data=req.body.data;
var id=req.body.uid;
console.log(req.body)
var survey= new Survey({
    user_id:id,
    question1: data.question1,
question2: data.question2,
question3: data.question3,
question4: data.question4,
question5: data.question5,
question6: data.question6,
question7: data.question7,
question8: data.question8,
question9: data.question9,
question10: data.question10,
question11: data.question11,
question12: data.question12,
question13: data.question13,
question14: data.question14,
question15: data.question15,
question16: data.question16,
question17: data.question17,
question18: data.question18,
question19: data.question19,
question20: data.question20,
question21: data.question21,
question22: data.question22,
question23: data.question23,
question24: data.question24,
question25: data.question25,
question26: data.question26,
question27: data.question27,
question28: data.question28,
question29: data.question29,
question30: data.question30,
question31: data.question31,
question32: data.question32,
question33: data.question33,
question34: data.question34,
question35: data.question35,
question36: data.question36,
question37: data.question37,
question38: data.question38,
})

survey.save(function(err,result){
    if(!err && result){
        console.log(result);
        res.send(result)
    }
})

}

exports.survey2=function(req,res){
    var data=req.body;
    var survey=new Survey2({
        user_id:data.uid,
        q1: data.q1,
    q2: data.q2,
    q3: data.q3,
    q4: data.q4,
    q5: data.q5,
    q6: data.q6,
    q7: data.q7,
    q8: data.q8,
    q9: data.q9,
    q10: data.q10
    })
    survey.save(function(err,result){
        if(!err && result){
            res.send(result)
        }else{
            console.log(err)
        }
    })
}

exports.getAllUSers=function(req,res){
    User.find().populate('SureveyDetails').populate('Surevey2Details').exec(function(err,user){
        if(!err && user){
            res.send(user)
        }else{
            console.log(err)
        }
    })
}

exports.getCount=function(req,res){
   User.count().exec( function(err, c) {
    Survey.count().exec(function(errr,sc){
        Survey2.count().exec(function(errrr,sc2){
            res.send({
                user:c,
                s1:sc,
                s2:sc2
            })
        })
    })
})
    
}

exports.getFirstSurveyData=function(req,res){
    Survey.find().populate('userDetails').exec(function(err,result){
        if(!err && result){
            res.send(result)
        }
    })
}
exports.getdatabyID=function(req,res){
    var data=req.body;
    console.log(data)
    User.findById(data.id).populate('SureveyDetails').populate('Surevey2Details').exec(function(err,user){
        if(!err && user){
            res.send(user)
        }else{
            console.log(err)
        }
    })
}

exports.deleteUserById=function(req,res){
    console.log(req.body);
    User.findByIdAndRemove(req.body.id).exec(function(err,doc){
        if(!err && doc){
            res.send(doc)
        }else{
            console.log(err)
        }
    })
}