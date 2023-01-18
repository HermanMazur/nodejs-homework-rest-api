const { HttpError } = require("../../helpers");

const getCurrent = (req, res, next) => {
    try {
        const { email, subscription } = req.user;
        res.json({
            email,
            subscription
        })
    } catch {
        next(HttpError(401, "Not authorized"))
    }

    

}

module.exports = getCurrent;

