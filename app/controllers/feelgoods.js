var mongoose 	= require('mongoose'),
	User  		= mongoose.model('Users'),
	FeelGood 	= mongoose.model('FeelGoods');

exports.create = function (req, res) {

	if (req.body.username && req.body.feelgood) {
		
		console.log(req.body.username, req.body.feelgood);
		console.log('Adding the Feelgood');

		User.find({username: req.body.username}, function(err, user) {
			if (!err) {
				var newFeelGood = new FeelGood({
					username: req.body.username,
					feelgood: req.body.feelgood
				})

				newFeelGood.save(function(err, feelgood) {
					if (!err) {
						user[0].feelgoods.push(feelgood._id);
						user[0].save(function(err, data) {
							if (!err) {
								console.log("Succesfully created FeelGood: ", data);
								res.send(feelgood);
							} else {
								res.send({'err' : 'Could not save the FeelGood to the user'});
							}
						})
					} else {
						res.send({'err' : 'Could not save the FeelGood'});
					}
				})
			} else {
				res.send({'err' : 'Error locating the user'});
			}
		})
	}
	else
		res.send({'err' : 'Please send a valid username and feelGood'});
}

exports.retrieve = function (req, res) {

	if (req.body.username) {
		User.find({username: req.body.username}).populate('feelgoods').exec(function(err, user) {
			if (!err) {
				res.send(user[0].feelgoods);
			} else {
				res.send({'err' : 'Username not found'});
			}
		});
	} else {
		res.send({'err' : 'Please send a valid username'});
	}
}