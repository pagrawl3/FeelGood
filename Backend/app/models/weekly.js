/******DATABASE FILE********/

//Module Dependencies
var mongoose 	= require('mongoose')

//Weeklies
var weeklySchema = new mongoose.Schema({
		challenge	: String,
		quote		: String,
		week 		: Number
})

//Finally PUBLISH the model to be used in other files and storage etc.
mongoose.model ('Weekly', weeklySchema)