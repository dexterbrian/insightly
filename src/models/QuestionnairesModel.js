import pkg from "mongoose";
const { model } = pkg;
import questionnaireSchema from "../schema/QuestionnaireSchema.js";

const Questionnaire = model('Questionnaire', questionnaireSchema);

export default Questionnaire;