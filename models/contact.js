const { Schema, model} = require("mongoose");
const Joi = require("joi");
const { handleMongooseError } = require("../helpers");

const contactSchema = new Schema({
    name: {
    type: String,
    required: [true, "Set name for contact"],
    },
    email: {
        type: String,
        unique:true
    },
    phone: {
    type: String,
    },
    favorite: {
    type: Boolean,
    default: false,
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required:true,
    },
},
{ versionKey: false, timestamps: true }
);

contactSchema.post("save", handleMongooseError);

const Contact = model("contact", contactSchema);

const addSchema = Joi.object({
name: Joi.string().required(),
email: Joi.string().required(),
phone: Joi.string().required(),
favorite: Joi.boolean(),
});

const patchSchema = Joi.object({
    favorite: Joi.boolean().required(),
});

const schemas = {
    addSchema,
    patchSchema,
};


module.exports = {
    schemas,
    Contact,
};
