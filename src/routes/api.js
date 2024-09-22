import express from 'express';
import { createQuestionnaire, getQuestionnaire } from '../controllers/QuestionnaireController.js';

const apiRouter = express.Router();

// Create Questionnaire
apiRouter.post('/questionnaires', (req, res) => createQuestionnaire(req, res));

// Get Questionnaire
apiRouter.get('/questionnaires/:id', (req, res) => getQuestionnaire(req, res));

export default apiRouter;