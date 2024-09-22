import Questionnaire from "../models/QuestionnairesModel.js";
import Question from "../models/QuestionsModel.js";
import Response from "../models/ResponsesModel.js";

export const createQuestionnaire = async (req, res) => {
  try {
    const { creator, title, questions } = req.body;
    let newQuestionnaire = await Questionnaire.create({ creator, title });
    console.log('questionnaire: ', newQuestionnaire);

    const newQuestions = questions.map(question => ({ questionnaire_id: newQuestionnaire._id, ...question }));
    const insertedQuestions = await Question.insertMany(newQuestions);
    console.log(insertedQuestions);

    res.status(201).json({ questionnaire: newQuestionnaire, questions: insertedQuestions });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error creating questionnaire' });
  }
};

export const getQuestionnaire = async (req, res) => {
  try {
    const { id } = req.params; // Get the id of the specific questionnaire
    const questionnaire = await Questionnaire.findById(id);

    // Get the questions for this specific questionnaire
    const questions = await Question.find({ questionnaire_id: id });

    res.status(200).json({ questionnaire, questions });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error getting questionnaire' });
  }
};

export const submitQuestionnaireResponses = async (req, res) => {
  try {
    const { id: questionnaire_id } = req.params; // Get the id of the specific questionnaire
    let responses = req.body;
    responses = responses.map(response => ({ questionnaire_id, ...response }));
    const submittedResponses = await Response.insertMany(responses);
    res.status(200).json({ submittedResponses });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error submitting responses' });
  }
}