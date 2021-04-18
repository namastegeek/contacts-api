/**
 * api-router.js
 * Router for contacts-api application
 * Project 3
 * Name: SCC Student
 * COMP2150 Web Services
 */

let router = require("express").Router();
var controller = require("./controller.js");

router.get("/", function (req, res) {
	res.json({
		status: "API is Working.",
		message: "Welcome to the Contacts API."
	});
});

router.route("/contacts")
	.get(controller.index)
	.post(controller.new);

router.route("/contacts/:contact_id")
	.get(controller.view)
	.put(controller.update)
	.delete(controller.delete);

module.exports = router;
