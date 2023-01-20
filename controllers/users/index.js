const signupUser = require("./signup");
const loginUser = require("./login");
const getCurrentUser = require("./getCurrentUser");
const logoutUser = require("./logout");
const updateStatusUser = require("./updateStatusUser");
const updateAvatar = require("./updateAvatar");

module.exports = {
    signupUser,
    loginUser,
    getCurrentUser,
    logoutUser,
    updateStatusUser,
    updateAvatar,
};