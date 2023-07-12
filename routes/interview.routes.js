const express = require('express');
const { history, answerFeedback, question } = require('../controllers/interview.controllers');

const interviewRouter = express.Router();


//get question route
interviewRouter.post('/questions', question)


//get answer route
interviewRouter.post("/answer" , answerFeedback)


//get history route
interviewRouter.post('/history', history)

module.exports = interviewRouter;
