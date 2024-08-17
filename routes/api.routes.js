const express = require('express');
const router = express.Router()

const user = require('./user.routes')
const typealert = require('./typealert.routes')
const bancoSangre = require('./bancoSangre.routes')
const eps = require('./eps.routes')
const consultorioMedico = require('./consultorioMedico.routes')
const alert = require('./alert.routes')
const incident = require('./incident.routes')

router.use('/api', user)
router.use('/api', typealert)
router.use('/api', bancoSangre)
router.use('/api', consultorioMedico)
router.use('/api', eps)
router.use('/api', alert)
router.use('/api', incident)

module.exports = router
