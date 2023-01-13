const express = require('express');
const webController = require('../../controllers/web.controller');
const { upload } = require('../../utils/Multer');


const router = express.Router();



router.route('/').post(webController.createWeb);

router.route('/').get(webController.getWeb);



module.exports = router;