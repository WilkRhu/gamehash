const Joi = require('@hapi/joi')

const stringSchema = Joi.object({
    board: Joi.string()
    .max(9)
    .min(9)
    .required()
})

module.exports = stringSchema