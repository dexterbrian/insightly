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

export const getQuestionnaireViaApi = async (req, res) => {
  try {
    const { id } = req.params; // Get the id of the specific questionnaire

    res.status(200).json(await getQuestionnaire(id));
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error getting questionnaire' });
  }
};

const getQuestionnaire = async (id) => {
  const questionnaire = await Questionnaire.findById(id);

  // Get the questions for this specific questionnaire
  const questions = await Question.find({ questionnaire_id: id });

  return { questionnaire, questions };
}

export const submitQuestionnaireResponses = async (req, res) => {
  try {
    const { id: questionnaire_id } = req.params; // Get the id of the specific questionnaire
    let responses = req.body;
    responses = responses.map(response => ({ questionnaire_id, ...response }));
    const submittedResponses = await Response.insertMany(responses);

    // TODO return the score instead of submittedResponses
    const score = getScore(submittedResponses, questionnaire_id);
    
    res.status(200).json({ score: score, submittedResponses });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error submitting responses' });
  }
}

  /**
   * Calculates the score for a set of submitted responses
   * @param {[{question_id: string, questionnaire_id: string, choice: string, respondent: string, _id: string, createdAt: string, updatedAt: string, __v: 0}]} submittedResponses - Array of submitted responses
   * @param {string} questionnaire_id - The id of the questionnaire
   * @returns {Promise<number>} The score as a percentage
   */
const getScore = async(submittedResponses, questionnaire_id) => {

  const questionnaire = await getQuestionnaire(questionnaire_id);
  const totalWeight = questionnaire.questions.reduce((total, question) => total + question.weight, 0);
  
  const scoreTally = submittedResponses.reduce((total, response) => {
    const question = questionnaire.questions.find(question => question._id.toString() === response.question_id);
    console.log('question: ', questionnaire.questions);
    return response.choice === question.answer ? total + question.weight : total + 0;
  }, 0);

  return Math.round((scoreTally / totalWeight) * 100);
};

// TODO Update Questionnaire

// TODO Delete Questionnaire

// TODO Delete a Question in a Questionnaire