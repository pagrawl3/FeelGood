var mongoose 	= require('mongoose'),
	User  		= mongoose.model('Users'),
	FeelGood 	= mongoose.model('FeelGoods');

exports.create = function (req, res) {

	if (req.body.username && req.body.feelgood) {
		
		console.log(req.body.username, req.body.feelgood);
		console.log('Adding the Feelgood');

		User.find({username: req.body.username}, function(err, user) {
			if (!err && req.body.hash == user[0].hash) {

				var date = Date.now
				if (req.body.date) {
					date = req.body.date
				}
				var newFeelGood = new FeelGood({
					username: req.body.username,
					feelgood: req.body.feelgood,
					date 	: date
				})

				newFeelGood.save(function(err, feelgood) {
					if (!err) {
						user[0].feelgoods.push(feelgood._id);
						user[0].save(function(err, data) {
							if (!err) {
								console.log("Succesfully created FeelGood: ", data);
								res.send({
									'success' 	: true,
									'dailygood'	:feelgood
								});
							} else {
								res.send({
									'success'	: false,
									'error' 	: 'Internal Associate Error Occured'
								});
							}
						})
					} else {
						res.send({
							'success'	: false,
							'error' 	: 'Could not save the DailyGood'
						});
					}
				})
			} else {
				res.send({
					'success'	: false,
					'error' 	: 'Username/Hash Incorrect'
				});
			}
		})
	}
	else {
		res.send({
			'success'	: false,
			'error' 	: 'Please send a valid username and DailyGood'
		});
	}
}

exports.retrieve = function (req, res) {
	if (req.body.username) {
		User.find({username: req.body.username}).populate('feelgoods').exec(function(err, user) {
			if (!err && req.body.hash == user[0].hash) {
				res.send({
					'success'		: true,
					'dailygoods' 	: user[0].feelgoods
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
			'error' 	: 'Please send a valid username'
		});
	}
}