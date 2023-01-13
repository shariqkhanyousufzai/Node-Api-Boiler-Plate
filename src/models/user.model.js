const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');
const { tokenTypes } = require('../config/tokens');

const userSchema = mongoose.Schema(
  {
    fname: {
      type: String,
      required: true,
    },
    lname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
    },
    password: {
        type: String,
        required: true,
    },
    picture: {
      type: Array,
    },
    date: {
        type: String,
        required: true,
        default : 'user'
    }
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
userSchema.plugin(toJSON);
userSchema.plugin(paginate);


// check if user email is taken
userSchema.statics.isEmailExist = async (email, excludeUserId) => {
    const user = await User.findOne({email, _id : { $ne: excludeUserId}});
    return !!user;
}


userSchema.methods.isPasswordMatch = async function (password) {
    const user = this;
    console.log(password,user);
    return bcrypt.compare(password, user.password);
};


userSchema.pre('save', async function (next) {
    const user = this;
    if (user.isModified('password')) {
      user.password = await bcrypt.hash(user.password, 8);
    }
    next();
  });

const User = mongoose.model('User', userSchema);

module.exports = User;
