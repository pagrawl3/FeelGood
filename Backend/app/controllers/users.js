//#######__MODULE DEPENDENCIES__#########
var mongoose 	= require('mongoose'),
	User 		= mongoose.model('Users')

//renders the login page, self-explanatory
exports.login = function (req, res) {
	res.render('index', {
		title	: 'Login'
	})
}


//used during sign in fb, never gets here
exports.signin = function (req, res) {}

//Facebook callback, simple redirect to home after succesful signin
exports.authCallback = function (req, res, next) { res.redirect('/home5') }

//Logs out the user, self-explanatory
exports.logout = function (req, res) {
	req.logout()
	res.redirect('/')
}

//Establish a session, comes here after passport verifs in routes
exports.session = function (req, res) {
	res.send({redirect: '/'});
}

exports.create = function (req, res) {
	if (req.body.username && req.body.hash && req.body.email) {
		
		console.log(req.body.username, req.body.hash, req.body.email);
		console.log('Adding the user');

		var newUser = new User({
			username: req.body.username,
			hash	: req.body.hash,
			email	: req.body.email
		})

		newUser.save(function(err, user) {
			if (!err) {
				res.send({
					'success' 	: true,
					'user'		: user
				})
			}
			else {
				res.send({
					'success' 	: false,
					'error'		: 'Internal Save Error Occured'
				})
			}
		})
		
	}
	else
		res.send({
			'success'	: false,
			'error' 	: 'Please send a valid username, password, and email'
		});
}

exports.retrieve = function(req, res) {
	if (req.body.username && req.body.hash) {
		User.find({username: req.body.username}).populate('dailygoods').exec(function(err, user) {
			if (!err && req.body.hash == user[0].hash) {
				res.send({
					'success'		: true,
					'user' 	: user[0]
				});
			} else {
				res.send({
					'success'	: false,
					'error' 	: 'Username/Hash Incorrect'
				});
			}
		});
	} else {
		res.send({
			'success'	: false,
			'error' 	: 'Please send a valid username/hash'
		});
	}
}