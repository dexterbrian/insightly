import pkg from "mongoose";
const { model } = pkg;
import questionnaireSchema from "../schema/QuestionnaireSchema.js";

const Questionnaire = model('Questionnaire', questionnaireSchema);

/**
 * Creates a new questionnaire in the database.
 *
 * @async
 * @param {{ creator: string, title: string }} questionnaireData - The data to create the questionnaire with.
 * @returns {Promise<{ _id: string, creator: string, title: string, createdAt: Date, updatedAt: Date }>} The newly created questionnaire.
 */
export const insertQuestionnaire = async (questionnaireData) => await Questionnaire.create(questionnaireData);

export default Questionnaire;