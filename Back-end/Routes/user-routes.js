//1 . update
//2. delete

const express = require('express')
const router = express.Router()
const userController = require('../controller/user-controller')

//middlewares
const { authCheck } = require('../middlewares/auth-middlewares')

router.get("/info",  authCheck,userController.info)
router.patch('/update/:id', authCheck ,userController.updateUser)
router.delete('/:id', authCheck ,userController.deleteUser)

module.exports = router