const Joi = require("joi");

const studentValidationSchema = {
  createOrUpdateStudentValidator: {
    body: Joi.object({
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      displayName: Joi.string().required(),
      photoURL: Joi.string().required(),
      email: Joi.string().required(),
      phone: Joi.number().required(),
      address: Joi.array().required(),
      dateOfBirth: Joi.date().required(),
      userType: Joi.string().required(),
    }),
  },
};

module.exports = studentValidationSchema;
