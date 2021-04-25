/**
 * controller.js
 * Controller for contacts-api application
 * Project 3
 * Name: SCC Student
 * COMP2150 Web Services
 */

const Contact = require("./model");

/**
 * Handle retrieval of all contacts
 * Corresponds to GET api/contacts
 * @param {*} req 
 * @param {*} res 
 */
exports.index = function (req, res) {
	Contact.get(function (err, contacts) {
		if (err) {
			res.json({
				status: "error",
				message: err,
			});
		}
		res.json({
			status: "success",
			message: "Contacts retrieved successfully",
			data: contacts
		});
	});
}

/**
 * Handle create assignment actions 
 * Corresponds to POST api/contacts
 * @param {*} req 
 * @param {*} res 
 */
exports.new = function (req, res) {
    var contact = new Contact();
    contact.name = req.body.name ? req.body.name : contact.name;
    contact.gender = req.body.gender;
    contact.email = req.body.email;
    contact.phone = req.body.phone;
// save the contact and check for errors
    contact.save(function (err) {
        if (err) {
            res.json(err);
		}
		res.json({
            message: 'New contact created!',
            data: contact
        });
    });
};

/**
 * Handle find contact using ID
 * Corresponds to GET /api/contacts/:contact_id
 * @param {*} req 
 * @param {*} res 
 */
exports.view = function (req, res) {
    Contact.findById(req.params.contact_id, function (err, contact) {
        if (err) {
            res.send(err);
		}
        res.json({
            message: 'Contact details loading..',
            data: contact
        });
    });
};

/**
 * Handle update contact
 * Corresponds to PUT /api/contacts/:contact_id
 * @param {*} req 
 * @param {*} res 
 */
exports.update = function (req, res) {
	Contact.findById(req.params.contact_id, function (err, contact) {
        if (err) {
            res.send(err);
		}
		contact.name = req.body.name ? req.body.name : contact.name;
        contact.gender = req.body.gender;
        contact.email = req.body.email;
        contact.phone = req.body.phone;
// save the contact and check for errors
        contact.save(function (err) {
            if (err) {
                res.json(err);
			}
            res.json({
                message: 'Contact Info updated',
                data: contact
            });
        });
    });
};

/**
* Handle delete contact
* Corresponds to DELETE /api/contacts/:contact_id
* @param {*} req 
* @param {*} res 
*/
exports.delete = function (req, res) {
    Contact.remove({
        _id: req.params.contact_id
    }, function (err, contact) {
        if (err) {
            res.send(err);
		}
		res.json(
			{
				status: "success",
				message: 'Contact deleted'
			});
    });
};
