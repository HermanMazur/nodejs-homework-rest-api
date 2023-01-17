const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers/users")

const {ctrlWrapper} = require("../../helpers");

const { validateBody, authenticate } = require("../../middlewares");

const { schemas } = require("../../models/user");

router.post('/signup', validateBody(schemas.joiRegisterSchema), ctrlWrapper(ctrl.signupUser))

router.post('/login', validateBody(schemas.joiLoginSchema), ctrlWrapper(ctrl.loginUser))

router.get('/current', authenticate, ctrlWrapper(ctrl.getCurrentUser))

router.post('/logout', authenticate, ctrlWrapper(ctrl.logoutUser));

router.post('/subscription', authenticate, validateBody(schemas.joiUpdateSchema), ctrlWrapper(ctrl.updateStatusUser))

module.exports = router;