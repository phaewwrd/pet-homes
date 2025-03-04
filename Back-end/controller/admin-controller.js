// 1. login
// 2. dashboard
// 3. update user(register)
// 4. delete user
// 5. get user info. by appointment id

const prisma = require("../configs/prisma")
const createError = require("../utils/createError")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

exports.login = async(req,res,next)=>{
try {
    const { email} = req.body
    const profile = await prisma.user.findFirst({
        where:{
            email
            
        }
    })
    if(!profile){
        return createError(400, "Invalid Email or Password")
    }

    // const isMatch = await bcrypt.compareSync(password, profile.password)

    // if(!isMatch){
    //     return createError(400, "Invalid Email or Password")
    // }

    const payload ={
        id: profile.id,
        role: profile.role,
        firstName: profile.firstName,
        lastName: profile.lastName,
        email: profile.email,
        tel: profile.tel,

    }
    const token = jwt.sign(payload, process.env.SECRET_KEY,{
        expiresIn:"30d"
    })

    res.json({ message: "login Successfully!!", token : token})
} catch (error) {
    next(error)
}
}





exports.delete = async(req,res,next)=>{
    try {
        const {id} =req.params
        const deleted = await prisma.vetClinic.delete({
            where:{
                id : Number(id)
            }
        })
        console.log(id);
        res.json({ message : "Delete Successfully!!"})
    } catch (error) {
        next(error)
    }
}

exports.getUserInfo = async(req,res,next)=>{
    try {
        const {} = req.params
        res.json({ message : "Get all users"})
    } catch (error) {
        next(error)
    }
}
