const express = require('express');
const portfolioController = require('../../controllers/portfolio.controller');
const { upload } = require('../../utils/Multer');


const router = express.Router();

// router.route('/header').get(headerController.getHeaderData);

router.route('/').post(upload.array('images',50),portfolioController.createPortfolio);

router.route('/').get(portfolioController.getPortfolio);



module.exports = router;