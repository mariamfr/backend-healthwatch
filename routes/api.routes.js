const express = require('express');
const router = express.Router()

const user = require('./user.routes')
const typealert = require('./typealert.routes')
const bloodBank = require('./bloodBank.routes')
const bloodBankFeature = require('./bloodBankFeature.routes')
const eps = require('./eps.routes')
const alert = require('./alert.routes')

router.use('/api', user)
router.use('/api', typealert)
router.use('/api', bloodBank)
router.use('/api', bloodBankFeature)
router.use('/api', eps)
router.use('/api', alert)

module.exports = router
