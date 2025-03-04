//  Update user
// Delete user
const prisma = require('../configs/prisma')

exports.info = async(req,res,next)=>{
    try {
        const {id} = req.user
        const profile = await prisma.user.findFirst({
            where:{
                id : req.user.id
            },
            select:{
                id: true,
                email: true,
                firstName: true,
                lastName: true,
                tel: true,
                password: true,

            }
        })

        res.json({result : profile})
        console.log('result', profile)
    } catch (error) {
        next(error)
    }
}

exports.updateUser = async(req,res,next) =>{
    try {
        const {id} = req.params
        const { firstName, lastName, tel, email} = req.user
        
        const userId = await prisma.user.findFirst({
            where:{
                id: Number(id)
            }
        })

        const updated = await prisma.user.update({
            where:{
                id: Number(id)
            },
            data:{
                firstName: firstName,
                lastName: lastName,
                tel: tel,
                email: email,
            }
        })

        res.json({result : updated})
    } catch (error) {
        next(error)
    }
}

exports.deleteUser = async (req,res,next) =>{
    try {
        const {id} = req.params
        const deleted = await prisma.user.delete({
            where:{
                id : Number(id)
            }
        })
        console.log(id);

        res.json({message: 'Delete Successfully!!'})
    } catch (error) {
        next(error)
    }
}