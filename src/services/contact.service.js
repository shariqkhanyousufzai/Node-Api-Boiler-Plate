const httpStatus = require('http-status');
const { User } = require('../models');
const Contact = require('../models/contact.model');
const ApiError = require('../utils/ApiError');


const createContact = async (userBody) => {
    return Contact.create(userBody);
}

module.exports = {
    createContact,
};