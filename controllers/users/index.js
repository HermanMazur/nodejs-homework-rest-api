const signupUser = require("./signup");
const loginUser = require("./login");
const getCurrentUser = require("./getCurrentUser");
const logoutUser = require("./logout");
const updateStatusUser = require("./updateStatusUser");

module.exports = {
    signupUser,
    loginUser,
    getCurrentUser,
    logoutUser,
    updateStatusUser,
};