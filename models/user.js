const { Schema, model} = require("mongoose");
const Joi = require("joi");

const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const { handleMongooseError } = require("../helpers");

const userSchema = new Schema(
{
    password: {
        type: String,
        minlength: 6,
        required: [true, "Password is required"],
    },
    email: {
        type: String,
        match: emailRegexp,
        required: [true, "Email is required"],
        unique: true,
    },
    subscription: {
        type: String,
        enum: ["starter", "pro", "business"],
        default: "starter",
    },
    token: {
        type: String,
        default: null,
    }
    },
{ versionKey: false, timestamps: true });

userSchema.post("save", handleMongooseError);

const User = model("user", userSchema);

const joiRegisterSchema = Joi.object({
email: Joi.string().pattern(emailRegexp).required(),
password: Joi.string().min(6).required(),
});

const joiLoginSchema = Joi.object({
email: Joi.string().pattern(emailRegexp).required(),
password: Joi.string().min(6).required(),
});

const joiUpdateSchema = Joi.object({
subscription: Joi.string().required(),
});

const schemas = {
    joiRegisterSchema,
    joiLoginSchema,
    joiUpdateSchema,
};

module.exports = {
    User,
    schemas,
};
