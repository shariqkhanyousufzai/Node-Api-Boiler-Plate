const express = require('express');
const headerController = require('../../controllers/header.controller');
const headerValidation = require('../../validations/header.validation');
const validate = require('../../middlewares/validate');


const router = express.Router();

router.route('/header').get(headerController.getHeaderData);

router.route('/header').post(validate(headerValidation.createHeader),headerController.createHeaderData);


module.exports = router;