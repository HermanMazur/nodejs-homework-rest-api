const fs = require('fs/promises');
const path = require("path");
const { HttpError } = require("../../helpers");


const { User } = require("../../models/user");

const avatarsDir = path.join(__dirname, "../../", "public", "avatars");

const updateAvatar = async (req, res) => {
    const { path: tempUpload, originalname } = req.file;
    const { _id } = req.user;

    const filename = `${_id}_${originalname}`;
    const resultUpload = path.join(avatarsDir, filename);



    await fs.rename(tempUpload, resultUpload);
    const avatarUrl = path.join("avatars", filename);
    const user = await User.findByIdAndUpdate(_id, { avatarUrl });

    if (!user) {
    throw HttpError(404, "Not found");
    }
    res.json({
        avatarUrl
    })
};

module.exports = updateAvatar;