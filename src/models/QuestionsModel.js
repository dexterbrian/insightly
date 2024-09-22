import pkg from "mongoose";
const { model } = pkg;
import questionSchema from "../schema/QuestionSchema.js";

const Question = model('Question', questionSchema);

export default Question;