const express = require('express');
const contactController = require('../../controllers/contact.controller');
const headerValidation = require('../../validations/header.validation');
const validate = require('../../middlewares/validate');
const { upload } = require('../../utils/Multer');


const router = express.Router();

router.route('/').post(validate(headerValidation.createContact),contactController.createContact);


module.exports = router;