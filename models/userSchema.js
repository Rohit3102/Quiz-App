const mongoose = require('mongoose');
const plm = require('passport-local-mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/quizapp").then(()=> console.log("Start Quiz"))

const userModel = new mongoose.Schema({
    username: String,
    firstname: String,
    lastname: String,
    email: String,
    password: String,
});

userModel.plugin(plm);
module.exports = mongoose.model("user", userModel)