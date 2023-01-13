const httpStatus = require('http-status');
const { User } = require('../models');
const Header = require('../models/header.model');
const ApiError = require('../utils/ApiError');


const getHeader = async (userBody) => {
    return Header.findOne().sort({ _id : -1});
}


const createHeader = async (userBody) => {
    return Header.create(userBody);
}

module.exports = {
    getHeader,
    createHeader
  };