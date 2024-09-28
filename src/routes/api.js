import express from 'express';
import { createQuestionnaire, getQuestionnaireViaApi, updateQuestionnaire, submitQuestionnaireResponses, deleteQuestionnaire, deleteQuestion } from '../controllers/QuestionnaireController.js';

const apiRouter = express.Router();

// Create Questionnaire
apiRouter.post('/questionnaires', (req, res) => createQuestionnaire(req, res));

// Get Questionnaire
apiRouter.get('/questionnaires/:id', (req, res) => getQuestionnaireViaApi(req, res));

// Update Questionnaire
apiRouter.put('/questionnaires/:id', (req, res) => updateQuestionnaire(req, res));

// Submit Responses to a Questionnaire
apiRouter.post('/questionnaires/:id/submit', (req, res) => submitQuestionnaireResponses(req, res));

// Delete questionnaire
apiRouter.delete('/questionnaires/:id', (req, res) => deleteQuestionnaire(req, res));

// Delete a question
apiRouter.delete('/questions/:id', (req, res) => deleteQuestion(req, res));

export default apiRouter;