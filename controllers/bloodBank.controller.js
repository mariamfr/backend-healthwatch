//el nombre de la variable BloodBank debe coincidir con el nombre del archivo BloodBank.js
//BloodBank es el modelo
const BloodBanks = require('../models/BloodBank')

const createBloodBank = async(req, res) => {
    // desestructurar el schema
    const  bloodBanks  = req.body

  try {
        const BloodBank = await BloodBanks.findOne ({
             "type": bloodBanks.type,
            "name": bloodBanks.name,
            "crs.type": bloodBanks.crs.type,
            "crs.properties.name": bloodBanks.crs.properties.name
          })
        if(BloodBank) return res.status(409).json({
            ok: false,
            msg: `${BloodBank._id} is already exist in database`
        })

        const dbBloodBank = new BloodBanks ( bloodBanks );
        await dbBloodBank.save();
        // await mongoose.connection.close();
        return res.status(201).json({
            ok: true,
            // msg: `${bloodBanks.name} created successfuly`
            msg: `Blood Banks created successfuly`
        })

    } catch(error) {
        console.error(`Please contact to support`, error)
        return res.status(500).json[{
            ok: false,
            msg: `Please contact to support ${'\r\n' + error }`
        }]
    }
}

module.exports = { createBloodBank }
