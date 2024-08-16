const express = require('express')

// permitir comunicarnos con el frontend
const router = express.Router()
const {createBloodBank
    , updateBloodBank    
    , getAllBloodBankFeature} = require('../controllers/bloodBank.controller')

//traer el token
const { validateToken } = require('./../middlerwares/validateToken')


//validaciones incluidas en el controler
router.post('/newbloodbank', createBloodBank)
router.post('/updatebloodbank', updateBloodBank)
router.get('/bloodbanks', getAllBloodBankFeature)

module.exports = router