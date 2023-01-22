const jimp = require("jimp");

const resizeAvatar = async (pathAvatar) => {
const ava = await jimp.read(pathAvatar);
await ava.cover(250, 250);
await ava.writeAsync(pathAvatar);
};

module.exports = resizeAvatar;