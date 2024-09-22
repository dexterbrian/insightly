import pkg from 'mongoose';
const { Schema } = pkg;

const questionSchema = new Schema({
    questionnaire_id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    question: {
        type: String,
        required: true
    },
    choices: [
        {
            type: String,
            required: true
        }
    ],
    answer: {
        type: String,
        required: true
    },
    weight: {
        type: Number,
        required: true
    }
});

export default questionSchema;