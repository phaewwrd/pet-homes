//1 . update
//2. delete

const express = require('express')
const router = express.Router()
const userController = require('../controller/user-controller')

//middlewares
const { authCheck } = require('../middlewares/auth-middlewares')


router.patch('/update', authCheck ,userController.updateUser)
router.delete('/:id', authCheck ,userController.deleteUser)

module.exports = router