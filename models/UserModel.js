const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
    mail:{type: String, required:true, unique:true},
    password:{type: String, required:true},
})


module.exports = mongoose.model('User', userSchema.plugin(uniqueValidator))