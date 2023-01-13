const express = require('express');
const aboutmeController = require('../../controllers/aboutme.controller');
const headerValidation = require('../../validations/header.validation');
const validate = require('../../middlewares/validate');
const { upload } = require('../../utils/Multer');


const router = express.Router();

router.route('/').get(aboutmeController.getAboutme);

router.route('/').post(upload.single('profile_img'),validate(headerValidation.createAboutMe),aboutmeController.createAboutme);


module.exports = router;