import express from 'express';
import { createQuestionnaire, getQuestionnaireViaApi, updateQuestionnaire, submitQuestionnaireResponses } from '../controllers/QuestionnaireController.js';

const apiRouter = express.Router();

// Create Questionnaire
apiRouter.post('/questionnaires', (req, res) => createQuestionnaire(req, res));

// Get Questionnaire
apiRouter.get('/questionnaires/:id', (req, res) => getQuestionnaireViaApi(req, res));

// Update Questionnaire
apiRouter.put('/questionnaires/:id', (req, res) => updateQuestionnaire(req, res));

// Submit Responses to a Questionnaire
apiRouter.post('/questionnaires/:id/submit', (req, res) => submitQuestionnaireResponses(req, res));

export default apiRouter;