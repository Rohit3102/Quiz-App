var express = require('express');
var router = express.Router();
const userModel = require('../models/userSchema');
const localStrategy = require('passport-local');
const passport = require('passport');
passport.use(new localStrategy(userModel.authenticate()));

 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {admin: req.user});
});

router.post('/register', async function(req, res, next){
const userData = new userModel({
  firstname: req.body.firstname,
  lastname: req.body.lastname,
  username: req.body.username,
  email: req.body.email,
  secret: req.body.secret
});

userModel.register(userData, req.body.password)
.then(function(){
  passport.authenticate("local")(req,res, function(){
    res.redirect('/signup');
  });
});
});

router.get('/signup', function(req, res, next) {
  res.render('login', {admin: req.user});
});

router.post('/signup', passport.authenticate("local", {
  successRedirect: '/profile',
  failureRedirect: '/'
}) ,function(req, res, next){});

router.get('/profile', isLoggedIn, function(req, res, next) {
  res.render('profile', {admin: req.user});
});

router.get('/logout', function(req, res, next){
  req.logout(function(err){
    if(err) { return next(err);}
    res.redirect('/')
  })
})

function isLoggedIn(req, res, next){
  if( req.isAuthenticated()){
    return next()
  }
  res.redirect('/')
}

router.get('/hindi', isLoggedIn, function(req, res, next) { 
  res.render('hindi', {admin: req.user});
});
router.get('/english', isLoggedIn, function(req, res, next) {
  res.render('english', {admin: req.user});
});
router.get('/math', isLoggedIn, function(req, res, next) {
  res.render('math', {admin: req.user});
});

router.get('/computer', isLoggedIn, function(req, res, next) {
  res.render('computer', {admin: req.user});
});

router.get('/general', isLoggedIn, function(req, res, next) {
  res.render('general', {admin: req.user});
});


module.exports = router;
