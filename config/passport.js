var mongoose 	= require('mongoose'),
	users 		= require('../app/controllers/users')
	passport 	= require('passport');

//Passport Strategies
var FacebookStrategy 	= require('passport-facebook').Strategy

//Mongoose Model
var User = mongoose.model('Users')

module.exports = function(passport) {

	//SERIALIZATION AND DESERIALIZATION -- To support storage <--Learn MORE
	passport.serializeUser(function(user, done) {
		done(null, user.id)
	})
	passport.deserializeUser(function(id, done) {
		User.findById(id, function(err, user){
			done(err, user)
		})
	})

	//USE FACEBOOK STRATEGY -- allows facebook login auth
	// Function used while registering/logging in with facebook
	passport.use(new FacebookStrategy({
			clientID	: '262701717210609',
			clientSecret: 'ccf7af6a06f5bbb386a23c34b19a647b',
			callbackURL	: 'http://feelgood.prath.am/auth/facebook/callback'
		},
		function(accessToken, refreshToken, profile, done) {
			User.findOne({ 'facebook.id' : profile.id }, function(err, user) {
				if (user) { done(null, user); }
				else {
					var user = new User({
						username	: profile.id,
						email 		: profile.emails[0].value,
						name 		: profile.displayName,
						provider	: 'facebook',
						facebook 	: profile._json
					})
					user.save(function(err) {
						if (err) console.log(err);
						return done(err, user);
					});
				}
			});
		}
	));
}