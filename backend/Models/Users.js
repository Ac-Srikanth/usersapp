const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema(
	{
		username: {
			type: String
		},
		city: {
			type: String
		},
		contact: {
			type: Number
		},
		dob: {
			type: String
		}
	},
	{
		collection: 'users'
	}
);
module.exports = mongoose.model('User', userSchema);
