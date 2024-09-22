import pkg from "mongoose";

const { Schema } = pkg;

const responseSchema = new Schema({
    question_id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    questionnaire_id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    choice: {
        type: String,
        required: true
    },
    respondent: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

export default responseSchema;