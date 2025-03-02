const express = require('express')
const router = express.Router()
const mapController = require('../controller/map-controller')

router.get('/getallvets', mapController.getVetsInfo)
router.get('/searchvets', mapController.searchVets)

module.exports = router