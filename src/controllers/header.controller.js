const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { authService, userService, tokenService, emailService, phoneVerificationService, headerService } = require('../services');
const ApiError = require('../utils/ApiError');
const moment = require('moment');


const getHeaderData = async (req,res) => {
    const getHeaderData = await headerService.getHeader();
    res.status(httpStatus.CREATED).send({ data: getHeaderData });  
}

const createHeaderData = async (req,res) => {
    const createHeaderData = await headerService.createHeader(req.body);
    res.status(httpStatus.CREATED).send({ data: createHeaderData }); 
}


module.exports = {
    getHeaderData,
    createHeaderData
}