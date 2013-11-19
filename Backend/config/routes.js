module.exports = function(params) {

	var app = params['app'];
	if (params['passport'])
		var passport = params['passport'];

	//__IMPORT ALL THE CONTROLLERS
	var users  			= require('../app/controllers/users');
	var main  			= require('../app/controllers/main');
	var dailygoods		= require('../app/controllers/dailygoods');

	// app.get ('/auth/facebook'			, passport.authenticate('facebook', { scope: [ 'email', 'user_about_me'], failureRedirect: '/' }), users.signin)
 	// app.get ('/auth/facebook/callback'	, passport.authenticate('facebook', { failureRedirect: '/' }), users.authCallback)
	// app.get ('/logout'					, users.logout)

	app.post('/dailygoods/create', 	dailygoods.create)
	app.post('/dailygoods/retrieve', dailygoods.retrieve)

	app.post('/users/create', 	users.create)
	app.post('/users/retrieve',	users.retrieve)
	// app.post('/users/create', 	users.create)

 	//__FINALLY IF THERE IS NO KNOWN URL INCL. '/' THEN GO TO HOME
 	app.get('/*', main.index);
}

