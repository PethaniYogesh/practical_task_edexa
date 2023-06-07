const Joi = require('joi')
const MONGO_REGEX = new RegExp(/^[0-9a-fA-F]{24}$/)

const create = () => Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    phoneNumber: Joi.number().integer().min(10 ** 9).max(10 ** 10 - 1).required().messages({
        'number.min': 'Mobile number should be 10 digit.',
        'number.max': 'Mobile number should be 10 digit'
    }),
}).options({ stripUnknown: true })

const update = () => Joi.object({
    _id: Joi.string().pattern(MONGO_REGEX).required(),
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    phoneNumber: Joi.number().integer().min(10 ** 9).max(10 ** 10 - 1).required().messages({
        'number.min': 'Mobile number should be 10 digit.',
        'number.max': 'Mobile number should be 10 digit'
    }),
}).options({ stripUnknown: true })

const deleteDoc = () => Joi.object({
    _id: Joi.string().pattern(MONGO_REGEX).required(),
}).options({ stripUnknown: true })


module.exports = {
    create,
    update,
    deleteDoc
}