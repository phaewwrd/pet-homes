// 1. Add pets
// 2. Update pet
// 3. Delete pet

const express = require('express')
const router = express.Router()
const petController = require('../controller/pet-controller')

const { authCheck } = require('../middlewares/auth-middlewares')
const { validateWithZod, registerPet } = require('../middlewares/validator')


router.post("/add", validateWithZod(registerPet),authCheck, petController.add)
router.get("/get", authCheck, petController.get)
router.patch("/update/:id", authCheck, petController.update)
router.delete("/delete/:id", authCheck ,petController.delete)

module.exports = router