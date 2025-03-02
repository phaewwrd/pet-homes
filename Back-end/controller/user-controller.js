//  Update user
// Delete user
const prisma = require('../configs/prisma')


exports.updateUser = async(req,res,next) =>{
    try {
        const {id, firstName, lastName, tel, email, password} = req.user
        
        const hashedPassword = bcrypt.hashSync(password, 10)

        const updated = await prisma.user.update({
            where:{
                id: Number(id)
            },
            data:{
                firstName: firstName,
                lastName: lastName,
                tel: tel,
                email: email,
                password: hashedPassword
            }
        })

        res.json({message: 'Update Role Success!!'})
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