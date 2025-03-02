const prisma = require("../configs/prisma")
const createError = require("../utils/createError")
const bcrypt = require('bcryptjs')


exports.register = async(req,res,next)=>{
    try {
        const {name, email, password, location, province, address, type, doctor_name, phone} = req.body
        const checkEmail = await prisma.vetClinic.findFirst({
            where:{
                email
            }
        })
        if(checkEmail){
            return createError(400, "Email is already exist!!")
        }
        const hashedPassword = bcrypt.hashSync(password, 10)

        const profile = await prisma.vetClinic.create({
            data:{
                name,
                doctor_name,
                email,
                password : hashedPassword,
                location,
                phone,
                type,
                province,
                address,
                
            }
        })
        res.json({ result : profile})
    } catch (error) {
        next(error)
    }
}

