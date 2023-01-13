const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');
const { tokenTypes } = require('../config/tokens');

const webSchema = mongoose.Schema(
  {
    contact: {
        type: {
          pageName: { type: String, default: 'contact' },
          address: String,
          phone: String,
          email: String,
          meta: Object,
        },
      },
    home: {
        type: {
          pageName: { type: String, default: 'home' },
          address: String,
          phone: String,
          email: String,
          meta: Object,
        },
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
webSchema.plugin(toJSON);
webSchema.plugin(paginate);

const Web = mongoose.model('Web', webSchema);

module.exports = Web;
