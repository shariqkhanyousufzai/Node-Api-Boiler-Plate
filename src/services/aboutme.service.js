const httpStatus = require('http-status');
const { User } = require('../models');
const Aboutme = require('../models/aboutme.model');
const ApiError = require('../utils/ApiError');


const getAboutMe = async (userBody) => {
    return Aboutme.findOne().sort({ _id : -1});
}


const createAboutMe = async (userBody) => {
    return Aboutme.create(userBody);
}

module.exports = {
    createAboutMe,
    getAboutMe
};