const express = require('express');
const router = express.Router()

const user = require('./user.routes')
const typealert = require('./typealert.routes')
const bloodBank = require('./bloodBank.routes')
const eps = require('./eps.routes')

router.use('/api', user)
router.use('/api', typealert)
router.use('/api', bloodBank)
router.use('/api', eps)

module.exports = router
