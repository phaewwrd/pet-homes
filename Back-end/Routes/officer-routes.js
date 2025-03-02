const express = require("express"); 
const { validateWithZod, registerVets } = require("../middlewares/validator");
const router = express.Router()
const officerController = require("../controller/officer-controller")   

router.post("/register", validateWithZod(registerVets), officerController.register)

module.exports = router