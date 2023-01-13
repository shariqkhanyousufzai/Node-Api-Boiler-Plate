const httpStatus = require('http-status');
const { User } = require('../models');
const ApiError = require('../utils/ApiError');


const createUser = async (userBody) => {
    console.log(userBody);
    if(await User.isEmailExist(userBody.email)){
        throw new ApiError(httpStatus.BAD_REQUEST,'Email Already Exists');
    }
    return User.create(userBody);
}


const getUserByEmail = async (email) => {
    return User.findOne({email});
}


const updateUserById = async (id,userBody) => {
    return User.findByIdAndUpdate(id,userBody,{new:true});
}


module.exports = {
    createUser,
    getUserByEmail,
    updateUserById
  };