const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { portfolioService } = require('../services');
const ApiError = require('../utils/ApiError');
const moment = require('moment');


const createPortfolio = async (req,res,cb) => {
    var images = [];
    // cb(null, file.originalname.replace(/\\/g, "/");
    var fileUrl = process.env.APP_URL+'uploads/';
    for(i in req.files){
        images.push(fileUrl + req.files[i].originalname);
    }
    req.body['images'] = images;
    const createPortfolio = await portfolioService.createPortfolio(req.body);
    res.status(httpStatus.CREATED).send({ data: createPortfolio }); 
}


const getPortfolio = async (req,res) => {
    const getPortfolio = await portfolioService.getPortfolio();
    res.status(httpStatus.CREATED).send({ data: getPortfolio }); 
}


module.exports = {
    createPortfolio,
    getPortfolio
}