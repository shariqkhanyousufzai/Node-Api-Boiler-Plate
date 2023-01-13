const httpStatus = require('http-status');
const { User } = require('../models');
const Web = require('../models/web.model');
const ApiError = require('../utils/ApiError');


const createWeb = async (userBody) => {
    console.log(userBody);
    return Web.create(userBody);
}

const getWeb = async (userBody) => {
    console.log(userBody);
    if(userBody){
        return Web.findOne({[userBody]:{$exists : true}});
    }
    return Web.find();
}

module.exports = {
    createWeb,
    getWeb
};