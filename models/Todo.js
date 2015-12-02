var mongoose = require('mongoose');


var TodoSchema = new mongoose.Schema({
		name: String,
 		age : Number, 
 		note: String,
		reg_no : Number
});

module.exports = mongoose.model('Todo', TodoSchema);
