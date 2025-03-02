// 1. Add pets
// 2. Update pet
// 3. Delete pet

const express = require('express')
const router = express.Router()
const petController = require('../controller/pet-controller')

const { authCheck } = require('../middlewares/auth-middlewares')
const { validateWithZod, registerPet } = require('../middlewares/validator')


router.post("/add", validateWithZod(registerPet), petController.add)
router.patch("/update", authCheck, petController.update)
router.delete("/delete", authCheck ,petController.delete)

module.exports = router