const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { authService, userService, tokenService, emailService, phoneVerificationService, contactService } = require('../services');
const ApiError = require('../utils/ApiError');
const moment = require('moment');


const createContact = async (req,res) => {
    const createContact = await contactService.createContact(req.body);
    // await emailService.sendUserEmail(req.body.email,req.body.name,req.body.phone);
    res.status(httpStatus.CREATED).send({ data: createContact }); 
}


module.exports = {
    createContact
}