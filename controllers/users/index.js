const signupUser = require("./signup");
const loginUser = require("./login");
const getCurrentUser = require("./getCurrentUser");
const logoutUser = require("./logout");
const updateStatusUser = require("./updateStatusUser");
const updateAvatar = require("./updateAvatar");
const verify = require("./verify");
const resendVerifyEmail = require("./resendVerifyEmail");

module.exports = {
    signupUser,
    loginUser,
    getCurrentUser,
    logoutUser,
    updateStatusUser,
    updateAvatar,
    verify,
    resendVerifyEmail,
};