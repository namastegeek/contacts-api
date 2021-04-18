/**
 * model.js
 * Controller for contacts-api application
 * Project 3
 * Name: SCC Student
 * COMP2150 Web Services
 */

const mongoose = require("mongoose");

var contactSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	gender: String,
	phone: String,
	create_date:{
		type: Date,
		default: Date.now
	}
});

var Contact = module.exports = mongoose.model("contact2", contactSchema);
module.exports.get = function (callback, limit) {
	Contact.find(callback).limit(limit);
}