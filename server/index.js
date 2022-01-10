const express = require("express")
const app = express()
const mongoose = require("mongoose")
const AccountModel = require("./models/Accounts")

const cors = require('cors') // need to use this to allow connecting this API to React frontend
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://john:Mongojaguar1@laracluster0.wpvro.mongodb.net/LARAQuestionnaire?retryWrites=true&w=majority")

app.get("/getUsers", (req, res) => {
	console.log('UserModel:', AccountModel)
	AccountModel.find({}, (err, result) => {
		console.log('result:', result)
		if (err) {
			res.json(err)
		} else {
			res.json(result)
		}
	})	
})

app.post("/createUser", async (req, res) => {
	const user = req.body;
	const newAccount = new AccountModel(user);
	await newAccount.save();

	res.json(user);
})


const PORT = 3001
app.listen(PORT, () => {
	console.log('server running on ' + PORT);
})
