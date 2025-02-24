const express = require('express')
const router = express.Router()
const authController = require('../controller/auth-controller')
//middlewares
const { authCheck } = require('../middlewares/auth-middlewares')

router.post("/register", authController.register)
router.post("/login", authController.login)
router.get("/me", authCheck, authController.getMe)

module.exports = router