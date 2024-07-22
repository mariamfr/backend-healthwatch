const express = require('express')

// permitir comunicarnos con el frontend
const router = express.Router()
const {createTypeAlert, getAllTypeAlerts, getTypeAlertById, deleteTypeAlertById, updateTypeAlertById} = require('./../controllers/typealert.controller')

//validaciones para usuario
//pendiente agregar validaciones

//nuevo tipo alerta
router.post('/newtypealert', createTypeAlert)

//traer todas los tipos de alertas
router.get('/typealerts', getAllTypeAlerts)

//buscar tipo de alerta por el id
router.get('/typealert/:id', getTypeAlertById)

//Borrar tipo de alerta por el id
router.delete('/deletetypealert/:id', deleteTypeAlertById)

//modificar tipo de alerta por el id
router.put('/updatetypealert/:id', updateTypeAlertById)

module.exports = router