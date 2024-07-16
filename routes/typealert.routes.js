const express = require('express')

// permitir comunicarnos con el frontend
const router = express.Router()
const {createTypeAlert} = require('./../controllers/typealert.controller')

//validaciones para usuario
//pendiente agregar validaciones

//validaciones incluidas en el controler
router.post('/newtypealert', createTypeAlert)

module.exports = router