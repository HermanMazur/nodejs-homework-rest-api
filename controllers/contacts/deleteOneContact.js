const { Contact } = require("../../models/contact");
const { HttpError } = require("../../helpers");

const deleteOneContact = async (req, res, next) => {
        const { contactId } = req.params;
        const deletedContact = await Contact.findByIdAndRemove(contactId);
        if (!deletedContact) {
            throw HttpError(404, "Not found");
        }
        res.json({ message: "contact deleted", deletedContact });
}

module.exports = deleteOneContact;
