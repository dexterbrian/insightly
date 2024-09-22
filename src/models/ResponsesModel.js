import pkg from "mongoose";
const { model } = pkg;
import responseSchema from "../schema/ResponseSchema.js";

const Response = model('Response', responseSchema);

export default Response;