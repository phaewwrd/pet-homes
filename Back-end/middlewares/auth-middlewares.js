const createError = require('../utils/createError')
const jwt = require('jsonwebtoken')

exports.authCheck = async (req,res,next)=>{
    try {
        console.log('authCheck');
    } catch (error) {
        next(error)
    }
}