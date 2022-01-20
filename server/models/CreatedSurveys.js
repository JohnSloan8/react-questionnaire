const mongoose = require("mongoose")

const CreatedSurveySchema = new mongoose.Schema({
	name: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  story: {
    type: String,
    required: true,
  },
  sentenceSelection: {
    type: String,
    required: true,
  },
  numberSentences: {
    type: String,
    required: true,
  },
})

const CreatedSurveyModel = mongoose.model("CreatedSurveys", CreatedSurveySchema)
module.exports = CreatedSurveyModel
