const { User } = require("../../models/user");
const gravatar = require("gravatar");
const bcrypt = require("bcrypt");
const { HttpError, sendEmail } = require("../../helpers");
const { nanoid } = require("nanoid");

const signupUser = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (user) {
        throw HttpError(409, "Email in use")
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const avatarUrl = gravatar.url(email);
    const verificationToken = nanoid();

    const { BASE_URL } = process.env;

    const newUser = await User.create({ ...req.body, password: hashPassword, avatarUrl, verificationToken });
    
    const verifyEmail = {
        to: email,
        subject: "Verify you email",
        html:`<a target="_blank" href="${BASE_URL}api/user/verify/${verificationToken}">Click verify email</a>`
    }

    await sendEmail(verifyEmail);

    res.status(201).json({
        user: {
            email: newUser.email,
            subscription: newUser.subscription,
            },
    })
};

module.exports = signupUser;
