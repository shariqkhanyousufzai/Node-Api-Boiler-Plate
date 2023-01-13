const Joi = require('joi');

const createHeader = {
    body: Joi.object().keys({
    hero_h1: Joi.string().required(),
    hero_h2: Joi.string().required(),
    hero_h3: Joi.string().required(),
  }),
};


const createAboutMe = {
    body: Joi.object().keys({
    heading: Joi.string().required(),
    text_1: Joi.string().required(),
    text_2: Joi.string().required(),
  }),
};


const createContact = {
    body: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.string().required(),
    msg: Joi.string().required(),
  }),
};


module.exports = {
    createHeader,
    createAboutMe
}