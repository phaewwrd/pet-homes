const express = require("express"); 
const { validateWithZod, registerVets, loginScheme } = require("../middlewares/validator");
const router = express.Router()
const vetsController = require("../controller/vets-controller");
const authController = require("../controller/auth-controller");
const { authCheck } = require("../middlewares/auth-middlewares");

router.post("/register", validateWithZod(registerVets), vetsController.register)
router.post("/login", validateWithZod(loginScheme),authController.vetsLogin)
router.get("/me", authCheck, authController.getVets)

// get all appointment
router.get("/appointment", authCheck, vetsController.getAllAppointment)

module.exports = router