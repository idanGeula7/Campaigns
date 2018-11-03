const Joi = require("joi");

module.exports =
Joi.object().keys({
    id: Joi.number().integer().positive().required(),
    name: Joi.string().required(),
    thresholds: { 
        max_total: Joi.number().integer().positive(), 
        max_per_user: Joi.number().integer().positive()
    },
    data: Joi.object().required()
});