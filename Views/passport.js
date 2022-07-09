const passport = require('passport')
const GithubStrategy = require('passport-github2').Strategy;

passport.use(new GithubStrategy({
    clientID: "ec370d18ffa6289b553e",
    clientSecret: "365028df978f976c0a46d24f1bff207befd8b452",
    callbackURL: "http://localhost:54320/auth/github/callback"

}, 
function(acccessToken, refreshtoken, profile, done)
{
    return done(null, profile)
}));

passport.serializeUser(function(user, done)
    return
)