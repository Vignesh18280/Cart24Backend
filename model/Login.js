const mongoose = require('mongoose');
const {Schema} = mongoose;


const LoginSchema = new Schema({
       "Email" : {type : String
       , required: true,
        unique: true,
        validate: {
              validator : function(v){
                     return /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,4}$/gm.test(v);
              },
              message : "invalid"
        }
       },
       "Password" : String
});

exports.logins = mongoose.model('logins' , LoginSchema);