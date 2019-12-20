let mongoose = require('mongoose'),
	express = require('express'),
	router = express.Router();

let userSchema = require('../Models/Users');

//create user

router.route('/create-user').post((req, res, next) => {
	userSchema.create(req.body, (error, data) => {
		if (error) {
			return next(error);
		}
		else {
			console.log(data);
			res.json(data);
		}
	});
});

//Read User
router.route('/').get((req, res) => {
	userSchema.find((error, data) => {
		if (error) {
			return next(error);
		}
		else {
			res.json(data);
		}
	});
});

//Get Single User
router.route('/edit-user/:id').get((req, res) => {
	userSchema.findById(req.params.id, (error, data) => {
		if (error) {
			return next(error);
		}
		else {
			res.json(data);
		}
	});
});

//update user
router.route('/update-user/:id').put((req, res, next) => {
	userSchema.findByIdAndUpdate(
		req.params.id,
		{
			$set: req.body
		},
		(error, data) => {
			if (error) {
				return next(error);
				console.log(error);
			}
			else {
				res.json(data);
				console.log('User updated successfully !');
			}
		}
	);
});

//delete user
router.route('/delete-user/:id').delete((req, res, next) => {
	userSchema.findByIdAndRemove(req.params.id, (error, data) => {
		if (error) {
			return next(error);
		}
		else {
			res.status(200).json({
				msg: data
			});
		}
	});
});

module.exports = router;
