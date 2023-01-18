const { HttpError } = require("../../helpers");
const { User } = require("../../models/user");

const updateStatusUser = async (req, res, next) => {
    try {
    const { _id } = req.user;
    const user = await User.findByIdAndUpdate(_id, req.body, {
        new: true,
    });
    if (!user) {
        throw HttpError(404, "Not found");
    }
    res.json(user);
    } catch (error) {
    next(error);
    }
};

module.exports = updateStatusUser;