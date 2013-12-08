var mongoose 	= require('mongoose'),
	User  		= mongoose.model('Users'),
	DailyGood 	= mongoose.model('DailyGoods');

exports.create = function (req, res) {

	if (req.body.username && req.body.dailygood) {
		
		console.log(req.body.username, req.body.dailygood);
		console.log('Adding the dailygood');

		User.find({username: req.body.username}, function(err, user) {
			if (!err && req.body.hash == user[0].hash) {

				if (req.body.date) {
					var newDailyGood = new DailyGood({
										username 	: req.body.username,
										dailygood 	: req.body.dailygood,
										date 		: req.body.date
									})
				}
				else {
					var newDailyGood = new DailyGood({
										username 	: req.body.username,
										dailygood 	: req.body.dailygood,
									})
				}
				

				newDailyGood.save(function(err, dailygood) {
					if (!err) {
						user[0].dailygoods.push(dailygood._id);
						user[0].save(function(err, data) {
							if (!err) {
								console.log("Succesfully created DailyGood: ", data);
								res.send({
									'success' 	: true,
									'dailygood'	: dailygood
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
							'error' 	: 'Could not save the DailyGood',
							'internal'	: err
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
		User.find({username: req.body.username}).populate('dailygoods').exec(function(err, user) {
			if (!err && user[0]) {
				if (req.body.hash == user[0].hash) {
					res.send({
						'success'		: true,
						'dailygoods' 	: user[0].dailygoods
					});
				} else {
					res.send({
						'success'	: false,
						'error' 	: 'Username/Hash Incorrect'
					});	
				}
			} else {
				res.send({
					'success'	: false,
					'error' 	: 'Username not found'
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