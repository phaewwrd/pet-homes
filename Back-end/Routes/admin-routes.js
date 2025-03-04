// 1. login
// 2. dashboard
// 3. update user(register)
// 4. delete user
//5. get user info. by vets id

const express = require('express')
const router = express.Router()
const adminController = require('../controller/admin-controller')

const { validateWithZod, loginScheme, registerVets } = require('../middlewares/validator')
const { authCheck } = require('../middlewares/auth-middlewares')

router.post("/login", validateWithZod(loginScheme), adminController.login)
router.delete("/delete", authCheck, adminController.delete)

module.exports = router