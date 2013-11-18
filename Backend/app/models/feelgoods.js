/******DATABASE FILE********/

//Module Dependencies
var mongoose 	= require('mongoose')

//FeelGoods
var feelgoodSchema = new mongoose.Schema({
		feelgood	: String,
		date 		: { type: Date, default: Date.now },
		username 	: { type : String }
})

//Finally PUBLISH the model to be used in other files and storage etc.
mongoose.model ('FeelGoods', feelgoodSchema)