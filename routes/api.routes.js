const express = require('express');
const router = express.Router()

const user = require('./user.routes')
const bloodBank = require('./bloodBank.routes')

router.use('/api', user)
router.use('/api', bloodBank)

module.exports = router
