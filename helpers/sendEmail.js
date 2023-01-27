const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const { SENDGRED_API_KEY } = process.env;

sgMail.setApiKey(SENDGRED_API_KEY);

const sendEmail = async (data) => {
    const email = { ...data, from: "zlabademazur@gmail.com" };
    await sgMail.send(email);
    return true;
}

module.exports = sendEmail;
