import Joi from "joi";

const inputValidator = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required()
});

const validateUser = (req, res, next) => {
    const { error } = inputValidator.validate(req.body);
    if (error) return res.status(400).json({
        status: 400,
        message: error.details[0].message
    });
    next(); 
}   

export default validateUser; 