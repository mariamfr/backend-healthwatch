//el nombre de la variable BloodBank debe coincidir con el nombre del archivo BloodBank.js
//BloodBank es el modelo
const BloodBank = require('../models/BloodBank')

const createBloodBank = async(req, res) => {
    // desestructurar el schema
    const {  bloodBanks } = req.body

  try {
        const BloodBank = await BloodBank.findOne ({ BloodBanks: bloodBanks })
        if(BloodBank) return res.status(400).json({
            ok: false,
            msg: `${BloodBanks.crs,properties.name} is already exist in database`
        })

        const dbBloodBank = new BloodBank ({ BloodBank
        })
        await dbBloodBank.save();
        await mongoose.connection.close();
        return res.status(201).json({
            ok: true,
            msg: `${bloodBanks.crs.properties.name} created successfuly`
        })

    } catch(error) {
        console.error(`Please contact to support`, error)
        return res.status(500).json[{
            ok: false,
            msg: `Please contact to support`
        }]
    }
}

module.exports = {createBloodBank }
