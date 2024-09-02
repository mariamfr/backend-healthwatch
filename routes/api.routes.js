const express = require('express');
const router = express.Router()

const alert = require('./alert.routes')
const bancoSangre = require('./bancoSangre.routes')
const consultorioMedico = require('./consultorioMedico.routes')
const entidadFarmaceutica = require('./entidadFarmaceutica.routes')
const eps = require('./eps.routes')
const incident = require('./incident.routes')
const ips = require('./ips.routes')
const redAdscritaSalud = require('./redAdscritaSalud.routes')
const servicioTransfusionSanguinea = require('./servicioTransfusionSanguinea.routes')
const transporteEspecialPaciente = require('./transporteEspecialPaciente.routes')
const typealert = require('./typealert.routes')
const upi = require('./upi.routes')
const user = require('./user.routes')
const vacunaFiebre= require('./vacunaFiebre.routes');
//const {synchronization} = require('../controllers/synchronization.controller');


router.use('/api', alert)
router.use('/api', bancoSangre)
router.use('/api', consultorioMedico)
router.use('/api', entidadFarmaceutica)
router.use('/api', eps)
router.use('/api', incident)
router.use('/api', ips)
router.use('/api', redAdscritaSalud)
router.use('/api', servicioTransfusionSanguinea)
router.use('/api', transporteEspecialPaciente)
router.use('/api', typealert)
router.use('/api', upi)
router.use('/api', user)
router.use('/api', vacunaFiebre)
//router.use('/api', synchronization)
module.exports = router
