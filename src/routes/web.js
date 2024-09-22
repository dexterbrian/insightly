import express from 'express';
import Example from '../modelExample.js';
import { mydirname } from '../config.js';

const webRouter = express.Router();

webRouter.get('/', async (req, res) => {
  res.send('<h1>Hello world</h1>');
});

// Example post
webRouter.post('/example', async (req, res) => {
  const exampleData = req.body.example;

  await Example.create({ attribute1: exampleData })
    .then(result => {
        res.status(201).json({ Result: result.attribute1 })
        return result;
    })
    .catch(error => {console.log(error)})
});

// Enable input.css to be reachable
webRouter.get('/output.css', async (req, res) => {
  res.sendFile(mydirname + '/output.css');
})

webRouter.get('/questionnaire/create', async (req, res) => {
  res.sendFile(mydirname + '/views/questionnaire-form.html');
});

export default webRouter;