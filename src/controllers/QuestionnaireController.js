import Questionnaire from "../models/QuestionnairesModel.js";
import Question from "../models/QuestionsModel.js";

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
    const { id } = req.params;
    const questionnaire = await Questionnaire.findById(id);

    // Get the questions for this specific questionnaire
    const questions = await Question.find({ questionnaire_id: id });

    res.status(200).json({ questionnaire, questions });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error getting questionnaire' });
  }
};