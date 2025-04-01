const prisma = require('../configs/prisma')
const createError = require('../utils/createError')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.register = async( req, res, next) =>{
    try {
        const {firstName, lastName, email, password, confirmPassword, tel} = req.body
        const checkEmail = await prisma.user.findFirst({
            where:{
                email
            }
        })
        if(checkEmail){
            return createError(400, "Email is already Exist!!")
        }
        const hashedPassword = bcrypt.hashSync(password, 10)

        const profile = await prisma.user.create({
            data:{
                firstName, 
                lastName, 
                email, 
                password: hashedPassword,
                tel
            }
        })
        
        res.status(201).json({message : 'register success!', profile});
        
    } catch (error) {
        next(error)
    }
}

exports.login = async( req, res, next) =>{
    try {
        const { email, password} = req.body
        const profile = await prisma.user.findFirst({
            where:{
                email: email
            }
        })
        if(!profile){
            return createError(404, "Invalid Email or Password!!")
        }

        const isMatch =  bcrypt.compareSync(password,profile.password)

        if(!isMatch){
            return createError(400,"Invalid Email or Password!!")
        }

        const payload = {
            id : profile.id,
            email : profile.email,
            firstName: profile.firstName,
            lastName : profile.lastName,
            role: profile.role
        }
        const token = jwt.sign(payload, process.env.SECRET_KEY,{
            expiresIn:"30d"
        })

        res.status(200).json({message: 'Login success!', payload: payload, token: token});
    } catch (error) {
        next(error)
    }
}

exports.getMe = async( req, res, next) =>{
    try {
        const {id} = req.user
        const profile = await prisma.user.findFirst({
            where:{
                id,
            },
            omit:{
                password: true,
            }
        })

        res.json({result: profile});
    } catch (error) {
        next(error)
    }
}
exports.getVets = async( req, res, next) =>{
    try {
        const {id} = req.user
        const profile = await prisma.vetClinic.findFirst({
            where:{
                id,
            },
            omit:{
                password: true,
            }
        })

        res.json({result: profile});
    } catch (error) {
        next(error)
    }
}

exports.vetsLogin = async( req, res, next) =>{
    try {
        const { email, password} = req.body
        const profile = await prisma.vetClinic.findFirst({
            where:{
                email: email
            }
        })
        if(!profile){
            return createError(404, "Invalid Email or Password!!")
        }

        const isMatch =  bcrypt.compareSync(password,profile.password)

        if(!isMatch){
            return createError(400,"Invalid Email or Password!!")
        }

        const payload = {
            id : profile.id,
            email : profile.email,
            firstName: profile.firstName,
            lastName : profile.lastName,
            role: profile.role
        }
        const token = jwt.sign(payload, process.env.SECRET_KEY,{
            expiresIn:"30d"
        })

        res.status(200).json({message: 'Login success!', payload: payload, token: token});
    } catch (error) {
        next(error)
    }
}