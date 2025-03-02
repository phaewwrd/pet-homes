// 1. Add pets
// 2. Update pet
// 3. Delete pet
const prisma = require('../configs/prisma')
const createError = require('../utils/createError')

exports.add = async(req,res,next)=>{
try {
    const { id, name, chronicDisease, medicine, vaccined, age, breed, user, userId} = req.body
    const checkEmail = await prisma.pet.findFirst({
        where:{
            id
        }
    })
    if(!id){
        return createError(400, "Info. already exist!!")
    }
    const profile = await prisma.pet.create({
        data:{
            name: name,
            chronicDisease: chronicDisease,
            medicine: medicine,
            vaccined: vaccined,
            age: age,
            breed: breed,
            user: user,
            userId: userId
        }

    })


    res.json({ profile})
} catch (error) {
    next(error)
}
}

exports.update = async(req,res,next)=>{
    try {
        const{ id, name, chronicDisease, medicine, vaccined, age, breed, picture} = req.body

        const updated = await prisma.pet.update({
            where:{
                id: Number(id)

            },
            data:{
                name: name,
                chronicDisease: chronicDisease,
                medicine: medicine,
                vaccined: vaccined,
                age: age,
                breed: breed,
            }
        })
        res.json({message : 'Pet info. Update Success!!'})
    } catch (error) {
        next(error)
    }
}

exports.delete = async(req,res,next)=>{
    try {
        const {id} = req.params
        const deleted = await prisma.pet.delete({
            where:{
                id: Number(id)

            }
        })

        console.log(id);
        res.json({message: " Delete Pet Successfully"})
    } catch (error) {
        next(error)
    }
}