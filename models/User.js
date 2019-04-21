const mongoose = require('mongoose');

const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;
const userSchema = new Schema({
    email : {type:String , required : true, unique : true},
    password : {type:String , required : true}
},{
    timestamps : true
});
userSchema.plugin(uniqueValidator);

const User = mongoose.model('User',userSchema);
module.exports = User;