const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { webService } = require('../services');
const ApiError = require('../utils/ApiError');
const moment = require('moment');


const createWeb = async (req,res) => {
    console.log(req.body);
    const createWeb = await webService.createWeb(req.body);
    res.status(httpStatus.CREATED).send({ data: createWeb }); 
}


const getWeb = async (req,res) => {
    const getWeb = await webService.getWeb(req.query.page_name);
    res.status(httpStatus.CREATED).send({ data: getWeb }); 
}


module.exports = {
    createWeb,
    getWeb
}