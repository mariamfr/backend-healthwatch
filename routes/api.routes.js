const express = require('express');
const router = express.Router()

const user = require('./user.routes')
const typealert = require('./typealert.routes')

router.use('/api', user)
router.use('/api', typealert)

module.exports = router
