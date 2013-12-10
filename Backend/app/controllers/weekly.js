var mongoose 	= require('mongoose'),
	Weekly	 	= mongoose.model('Weekly');

exports.create = function (req, res) {
	if (req.body.challenge && req.body.quote && req.body.week) {
		var newWeekly = new Weekly({
			challenge 	: req.body.challenge,
			quote		: req.body.quote,
			week 		: req.body.week 
		});

		newWeekly.save(function(err, weekly) {
			if (!err) {
				res.send({
					'success' 	: true,
					'weekly'	: weekly
				})
			} else {
				res.send({
					'success'	: false,
					'error'		: 'Internal Save Error Occured'
				})
			}
		})

	} else {
		res.send({
			'success'	: false,
			'error'		: 'Please send all required parameters'

		})
	}
}

exports.retrieve = function (req, res) {
	if (req.body.week) {
		//return only the week specified
		Weekly.find({week: req.body.week}).exec(function(err, weekly) {
			if (!err && weekly[0]) {
				res.send({
					'success'		: true,
					'weekly' 		: weekly[0]
				});	
			} else {
				res.send({
					'success'	: false,
					'error' 	: 'Weekly not found'
				});
			}
		});
	} else {
		//return all of them
		Weekly.find().exec(function(err, weekly) {
			if (!err) {
				res.send({
					'success'	: true,
					'weekly'	: weekly
				});
			} else {
				res.send({
					'success' 	: false,
					'error' 	: 'Weeklies could not be retrieved'
				})
			}
		});
	}
	
}