
const express = require('express')

// permitir comunicarnos con el frontend
const router = express.Router()
const {createAlert, getAllAlerts, getAlertById, deleteAlertById, updateAlertById} = require('./../controllers/alert.controller')

//validaciones para usuario
//pendiente agregar validaciones

//nueva alerta
router.post('/newalert', createAlert)

//traer todas las alertas
router.get('/alerts', getAllAlerts)

//buscar alerta por el id
router.get('/alert/:id', getAlertById)

//Borrar alerta por el id
router.delete('/deletealert/:id', deleteAlertById)

//modificar alerta por el id
router.put('/updatealert/:id', updateAlertById)



module.exports = router

