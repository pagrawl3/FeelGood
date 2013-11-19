/******DATABASE FILE********/

//Module Dependencies
var mongoose 	= require('mongoose')

//DailyGoods
var dailygoodSchema = new mongoose.Schema({
		dailygood	: String,
		date 		: { type: Date, default: Date.now },
		username 	: { type : String }
})

//Finally PUBLISH the model to be used in other files and storage etc.
mongoose.model ('DailyGoods', dailygoodSchema)