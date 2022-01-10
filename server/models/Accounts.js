const mongoose = require("mongoose")

const AccountSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	}
})

const AccountModel = mongoose.model("Accounts", AccountSchema)
module.exports = AccountModel
