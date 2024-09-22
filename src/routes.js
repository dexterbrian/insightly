import express from 'express';
import Example from './modelExample.js';
import { createQuestionnaire } from './controllers/QuestionnaireController.js';

const router = express.Router();

router.get('/', async (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Example post
router.post('/example', async (req, res) => {
  const exampleData = req.body.example;

  await Example.create({ attribute1: exampleData })
    .then(result => {
        res.status(201).json({ Result: result.attribute1 })
        return result;
    })
    .catch(error => {console.log(error)})
});

// Create Questionnaire
router.post('/api/questionnaires', (req, res) => createQuestionnaire(req, res));

export default router;