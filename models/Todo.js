var mongoose = require('mongoose');


var TodoSchema = new mongoose.Schema({

  
		name: String,
 
 		age : number, 
 		note: String


});


module.exports = mongoose.model('Todo', TodoSchema);
