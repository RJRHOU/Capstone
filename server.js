const express = require('express')
const app = express();
const bodyparser = require('body-parser');
const {engine} = require('express-handlebars')
const winston = require('winston');

const moment = require('moment');

const pg = require('pg-promise')();




app.engine('handlebars', engine)




// const passport = require('passport');
// const GithubStrategy = require('passport-github2').Strategy;
// const { Console } = require('console');
// app.use(passport.initialize());
// app.use(passport.session());

const PORT =process.env.PORT || 6500;
const env = process.env.NODE_ENV || "production";
// router.get('/auth/github',
//   passport.authenticate('github', { scope: [ 'user:email' ] }));

// router.get('/auth/github/callback', 
//   passport.authenticate('github', { failureRedirect: '/login' }),
//   function(req, res) {
//     // Successful authentication, redirect home.
//     res.redirect('/success');
//   });


 
// module.exports = 
app.listen(PORT, () => {
  Console.log(`Server rumming on port ${PORT}`)
})