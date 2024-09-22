import { insertQuestionnaire } from "../models/QuestionnairesModel.js";
import { insertQuestions } from "../models/QuestionsModel.js";

export const createQuestionnaire = async (req, res) => {
  try {
    const { creator, title, questions } = req.body;
    let newQuestionnaire = await insertQuestionnaire({ creator, title });
    console.log('questionnaire: ', newQuestionnaire);

    const newQuestions = questions.map(question => ({ questionnaire_id: newQuestionnaire._id, ...question }));
    const insertedQuestions = await insertQuestions(newQuestions);
    console.log(insertedQuestions);

    res.status(201).json({ newQuestionnaire, questions: insertedQuestions });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error creating questionnaire' });
  }
};

export default createQuestionnaire;