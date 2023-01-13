const httpStatus = require('http-status');
const { User } = require('../models');
const Portfolio = require('../models/portfolio.model');
const ApiError = require('../utils/ApiError');


const createPortfolio = async (userBody) => {
    await Portfolio.deleteMany();
    return Portfolio.create(userBody);
}

const getPortfolio = async (userBody) => {
    return Portfolio.find();
}

module.exports = {
    createPortfolio,
    getPortfolio
};