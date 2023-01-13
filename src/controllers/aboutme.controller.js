const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { authService, userService, tokenService, emailService, phoneVerificationService, aboutmeService } = require('../services');
const ApiError = require('../utils/ApiError');
const moment = require('moment');


const getAboutme = async (req,res) => {
    const getAboutme = await aboutmeService.getAboutMe();
    res.status(httpStatus.CREATED).send({ data: getAboutme });  
}

const createAboutme = async (req,res) => {
    var fileUrl = process.env.APP_URL+'uploads/';
    req.body['profile_img'] = fileUrl + req.file.originalname
    const createAboutme = await aboutmeService.createAboutMe(req.body);
    res.status(httpStatus.CREATED).send({ data: createAboutme }); 
}


module.exports = {
    getAboutme,
    createAboutme
}