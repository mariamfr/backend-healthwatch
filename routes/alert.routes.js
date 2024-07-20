
const express = require('express')

// permitir comunicarnos con el frontend
const router = express.Router()
const {createAlert} = require('./../controllers/alert.controller')

//validaciones para usuario
//pendiente agregar validaciones

//validaciones incluidas en el controler
router.post('/newalert', createAlert)

module.exports = router

