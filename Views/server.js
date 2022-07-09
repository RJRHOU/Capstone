const express = require('express')
const app = express();
const bodyparser = require('body-parser');
const {engine} = require('express-handlebars')

app.use



app.engine('handlebars', engine)




const passport = require('passport');
const GithubStrategy = require('passport-github2').Strategy;
app.use(passport.initialize());
app.use(passport.session());


router.get('/auth/github',
  passport.authenticate('github', { scope: [ 'user:email' ] }));

router.get('/auth/github/callback', 
  passport.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/success');
  });


 const PORT  
module.exports = 