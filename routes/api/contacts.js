const express = require("express");

const ctrl = require("../../controllers/contacts");

const { schemas } = require("../../models/contact");

const {ctrlWrapper} = require("../../helpers");

const { validateBody, isValidId, authenticate } = require("../../middlewares");

const router = express.Router();



router.get("/", authenticate, ctrlWrapper(ctrl.getAllContacts));

router.get("/:contactId", authenticate, isValidId, ctrlWrapper(ctrl.getOneContact));

router.post("/", authenticate, validateBody(schemas.addSchema), ctrlWrapper(ctrl.addContact));

router.delete("/:contactId", authenticate, isValidId, ctrlWrapper(ctrl.deleteOneContact));

router.put("/:contactId", authenticate, isValidId, validateBody(schemas.addSchema), ctrlWrapper(ctrl.updateContact));

router.patch("/:contactId/favorite", authenticate, isValidId, validateBody(schemas.patchSchema), ctrlWrapper(ctrl.updateStatusContact));


module.exports = router;




// const express = require('express');
// const {Contact} = require("../../models/contact");
// const { contactsSchema } = require("../../models/contact");

// const router = express.Router();

// const HttpError  = require("../../helpers/HttpError");


// router.get('/', async (req, res, next) => {
//   try {
//     const result = await Contact.find({});
//     res.json(result)
//   } catch (error) {
//     next(error)
//   }
// });

// router.get('/:contactId', async (req, res, next) => {
//   try {
//     const { contactId } = req.params;
//     const result = await Contact.findOne({_id: contactId });
//     if (!result) {
//       throw HttpError(404, "Not found")
//     }
//     res.json(result)
//   } catch (error) {
//     next(error)
//   }
// })

// router.post('/', async (req, res, next) => {
//   try {
//     const { error } = contactsSchema.validate(req.body);
//     console.log(req.body)
//     if (error) {
//       throw HttpError(400, error.message)
//     }
//     const result = await Contact.create(req.body);

//     res.status(201).json(result)

//   } catch (error) {
//     next(error)
//   }

// })

// router.delete('/:contactId', async (req, res, next) => {
//   try {
//     const { contactId } = req.params;
//     const result = await Contact.findByIdAndDelete({_id: contactId});
//     if (!result) {
//       throw HttpError(404, "Not found ")
//     }
//     res.json({
//       message: "Contact was deleted"
//     });
// } catch (error) {
//   next(error)
// }
// })

// router.put('/:contactId', async (req, res, next) => {
//   try {
//     const { error } = contactsSchema.validate(req.body);
//     if (error) {
//       throw HttpError(400, error.message)
//     }
//     const { contactId } = req.params;
//     const result = await Contact.findByIdAndUpdate({_id: contactId}, req.body, {new:true});
//     if (!result) {
//       throw HttpError(404, "Not found")
//     }
//     res.json(result)
//   } catch (error) {
//     next(error)
//   }
// })


// router.patch('/:contactId/favorite', async (req, res, next) => {
//   try {
//     const { error } = contactsSchema.validate(req.body);
//     if (error) {
//       throw HttpError(400, error.message)
//     }
//     if (!req.body) {
//       throw HttpError(400, "Missing field favorite")
//     }
//     const { contactId } = req.params;

//     const updateStatusContact = await Contact.findByIdAndUpdate({ _id: contactId }, req.body, { new: true });
//     if (!updateStatusContact) {
//       next(HttpError(404, "Not found"));
//     }
//     res.json(updateStatusContact)
//   } catch (error) {
//     next(error)
//   }
// });

// module.exports = router;
