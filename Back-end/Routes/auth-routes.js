//1. register
//2.login
//3.me(profile)

const express = require('express')
const router = express.Router()
const authController = require('../controller/auth-controller')
//middlewares
const { authCheck } = require('../middlewares/auth-middlewares')
const { validateWithZod, registerSchema, loginScheme } = require('../middlewares/validator')

router.post("/register", validateWithZod(registerSchema),authController.register)
router.post("/login", validateWithZod(loginScheme),authController.login)
router.get("/me", authCheck, authController.getMe)


module.exports = router;