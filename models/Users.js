const mongoose = require('mongoose');
const {Schema} =  mongoose; //destructing as mongoose has an object Schema

const userSchema =  new Schema({
    googleId : String
});

mongoose.model('users',userSchema);
 
