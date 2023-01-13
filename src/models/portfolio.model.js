const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');
const { tokenTypes } = require('../config/tokens');

const portfolioSchema = mongoose.Schema(
  {
    images: {
      type: Array,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
portfolioSchema.plugin(toJSON);
portfolioSchema.plugin(paginate);



const Porfolio = mongoose.model('Porfolio', portfolioSchema);

module.exports = Porfolio;
