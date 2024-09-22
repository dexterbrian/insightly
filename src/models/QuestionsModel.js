import pkg from "mongoose";
const { model } = pkg;
import questionSchema from "../schema/QuestionSchema.js";

const Question = model('Question', questionSchema);

export const insertQuestions = async (questionData) => {
    return await Question.insertMany(questionData);
};

export default Question;