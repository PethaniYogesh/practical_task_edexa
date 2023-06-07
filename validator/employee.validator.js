const Joi = require('joi')
const MONGO_REGEX = new RegExp(/^[0-9a-fA-F]{24}$/)

/**
* Check validation for creating new employee records
*/
const create = () => Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    phoneNumber: Joi.number().integer().min(10 ** 9).max(10 ** 10 - 1).required().messages({
        'number.min': 'Mobile number should be 10 digit.',
        'number.max': 'Mobile number should be 10 digit'
    }),
}).options({ stripUnknown: true })

/**
* Check validation for updating existing employee records
*/
const update = () => Joi.object({
    _id: Joi.string().pattern(MONGO_REGEX).required(),
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    phoneNumber: Joi.number().integer().min(10 ** 9).max(10 ** 10 - 1).required().messages({
        'number.min': 'Mobile number should be 10 digit.',
        'number.max': 'Mobile number should be 10 digit'
    }),
}).options({ stripUnknown: true })

/**
* Check validation for existing employee _id is valid or not
*/
const deleteDoc = () => Joi.object({
    _id: Joi.string().pattern(MONGO_REGEX).required(),
}).options({ stripUnknown: true })


module.exports = {
    create,
    update,
    deleteDoc
}