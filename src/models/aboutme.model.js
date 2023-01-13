const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');
const { tokenTypes } = require('../config/tokens');

const aboutmeSchema = mongoose.Schema(
  {
    heading: {
      type: String,
      required: true,
    },
    text_1: {
      type: String,
      required: true,
    },
    text_2: {
      type: String,
      required: true,
    },
    profile_img: {
        type: String,
        required: true,
      }
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
aboutmeSchema.plugin(toJSON);
aboutmeSchema.plugin(paginate);



const Aboutme = mongoose.model('Aboutme', aboutmeSchema);

module.exports = Aboutme;
