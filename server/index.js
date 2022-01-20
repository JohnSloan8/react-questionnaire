const express = require("express")
const app = express()
const mongoose = require("mongoose")
const CreatedSurveyModel = require("./models/CreatedSurveys")

const cors = require('cors') // need to use this to allow connecting this API to React frontend
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://john:Mongojaguar1@laracluster0.wpvro.mongodb.net/LARA-survey?retryWrites=true&w=majority")

app.get("/getCreatedSurveys", (req, res) => {
	CreatedSurveyModel.find({}, (err, result) => {
		console.log('result:', result)
		if (err) {
			res.json(err)
		} else {
			res.json(result)
		}
	})	
})

app.post("/createSurvey", async (req, res) => {
	console.log('req.body:', req.body)
	const createdSurvey = req.body;
	const newCreatedSurvey = new CreatedSurveyModel(createdSurvey);
	await newCreatedSurvey.save();
	res.json(createdSurvey);
})


const PORT = 3001
app.listen(PORT, () => {
	console.log('server running on ' + PORT);
})
