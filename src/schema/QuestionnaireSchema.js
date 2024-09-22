import pkg from "mongoose";

const { Schema } = pkg;

const questionnaireSchema = new Schema({
    creator: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
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

export default questionnaireSchema;