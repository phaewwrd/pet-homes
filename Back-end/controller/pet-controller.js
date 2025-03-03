// 1. Add pets
// 2. Update pet
// 3. Delete pet
const { type } = require("@prisma/client");
const prisma = require("../configs/prisma");
const createError = require("../utils/createError");

exports.add = async (req, res, next) => {
  try {
    const {
      name,
      chronicDisease,
      medicine,
      vaccined,
      age,
      type,
      gender,
      breed,
    } = req.body;
    const  userId  = req.user || {}; 
console.log(userId.id, "sssssssssssssssss");

    if (!userId.id) {
      return res.status(401).json({ error: "Unauthorized user" });
    }

    const existingPet = await prisma.pet.findFirst({
      where: {
        name: name,
        userId: userId.id,
      },
    });

    if (existingPet) {
      return res
        .status(400)
        .json({ error: "Pet already exists for this user!" });
    }

    
    const newPet = await prisma.pet.create({
      data: {
        name,
        chronicDisease,
        medicine,
        vaccined,
        age,
        type,
        gender,
        breed,
        userId : userId.id,
         // ใช้ userId แทน user object เพื่อความเรียบง่าย
      },
    });

    console.log("New Pet Created:", newPet);
    res
      .status(201)
      .json({ message: "Pet registered successfully!", pet: newPet });
  } catch (error) {
    console.error("Error in pet registration:", error);  // เพิ่มการบันทึกข้อผิดพลาด
    next(error);
  }
};

exports.get = async( req, res, next) =>{
    try {
        const userId = req.user
        if (!userId.id) {
            return res.status(401).json({ error: "Unauthorized user" });
          }
        const petProfile = await prisma.pet.findMany({
            where:{
                userId: userId.id,
            },
            select:{
                name: true,
                chronicDisease: true,
                medicine: true,
                vaccined: true,
                age: true,
                type: true,
                gender: true,
                breed: true,
               
            }
        })

        res.json({result: petProfile});
    } catch (error) {
        next(error)
    }
}

exports.update = async (req, res, next) => {
  try {
    const {
      id,
      name,
      chronicDisease,
      medicine,
      vaccined,
      age,
      breed,
      type,
      gender,
    } = req.body;
console.log('req.body', req.body)
const userId = req.user;
    const updated = await prisma.pet.update({
      where: {
        userId : req.user.id,
        petId: id
    },
      data: {
        name: name,
        chronicDisease: chronicDisease,
        medicine: medicine,
        vaccined: vaccined,
        age: age,
        breed: breed,
        type : type,
        gender: gender,
      },
    });
    res.json({ result: updated});
  } catch (error) {
    next(error);
  }
};

exports.delete = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await prisma.pet.delete({
      where: {
        id: Number(id),
      },
    });

    console.log(id);
    res.json({ message: " Delete Pet Successfully" });
  } catch (error) {
    next(error);
  }
};
