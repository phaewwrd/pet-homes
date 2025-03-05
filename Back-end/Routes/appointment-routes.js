//1. get all appointment
//2. make appointment
//3. update appointment
//4. delete appointment

const express = require('express')
const router = express.Router()
const { authCheck } = require('../middlewares/auth-middlewares')
const appointmentController = require('../controller/appointment-controller')



router.post('/makeappointment', authCheck, appointmentController.makeappointment)
router.get('/get', authCheck, appointmentController.getAppointment)
router.patch("/update/:id", authCheck, appointmentController.update)


module.exports = router