const express = require('express')

// permitir comunicarnos con el frontend
const router = express.Router()
const {createBloodBank} = require('../controllers/bloodBank.controller')

// //validaciones para usuario
// const users = require('../middlerwares/validationBody')
// const validatFields = require('../middlerwares/validationResult')

//validaciones incluidas en el controler
router.post('/newbloodbank', createBloodBank)

module.exports = router