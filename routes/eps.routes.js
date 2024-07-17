const express = require('express')

// permitir comunicarnos con el frontend
const router = express.Router()
const {createEps} = require('../controllers/eps.controller')

//validaciones incluidas en el controler
router.post('/neweps', createEps)

module.exports = router