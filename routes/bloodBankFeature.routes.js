const express = require('express')

// permitir comunicarnos con el frontend
const router = express.Router()
const {createBloodBankFeature, searchBloodBankFeature} = require('../controllers/bloodBankFeature.controller')

//validaciones incluidas en el controler
router.post('/updatebloodbankfeature', createBloodBankFeature)
router.get('/searchbloodbankfeature', searchBloodBankFeature)

module.exports = router