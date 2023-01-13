const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');
const { tokenTypes } = require('../config/tokens');

const headerSchema = mongoose.Schema(
  {
    hero_h1: {
      type: String,
      required: true,
    },
    hero_h2: {
        type: String,
        required: true,
    },
    hero_h3: {
        type: String,
        required: true,
    }
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
headerSchema.plugin(toJSON);
headerSchema.plugin(paginate);



const Header = mongoose.model('Header', headerSchema);

module.exports = Header;
