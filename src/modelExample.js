import mongoose from 'mongoose';

// Schemas
const exampleSchema = new mongoose.Schema({
  attribute1: { type: String, required: true }
});

const Example = mongoose.model('Example', exampleSchema);

export default Example;