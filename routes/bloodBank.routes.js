const express = require('express')

// permitir comunicarnos con el frontend
const router = express.Router()
// const {createBloodBank, searchBloodBank} = require('../controllers/bloodBank.controller')
const {createBloodBank} = require('../controllers/bloodBank.controller')

//validaciones incluidas en el controler
router.post('/newbloodbank', createBloodBank)
// router.get('/searchbloodbank', searchBloodBank)

module.exports = router