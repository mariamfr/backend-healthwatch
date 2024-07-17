//el nombre de la variable Eps debe coincidir con el nombre del archivo Eps.js
//Eps es el modelo
const Eps = require('../models/Eps')

const createEps = async(req, res) => {
    // desestructurar el schema
    const {  eps } = req.body

  try {
        const Eps = await Eps.findOne ({ Eps: epss })
        if(Eps) return res.status(400).json({
            ok: false,
            msg: `${Eps.crs.properties.name} is already exist in database`
        })

        const dbEps = new Eps ({ Eps
        })
        await dbEps.save();
        await mongoose.connection.close();
        return res.status(201).json({
            ok: true,
            msg: `${eps.crs.properties.name} created successfuly`
        })

    } catch(error) {
        console.error(`Please contact to support`, error)
        return res.status(500).json[{
            ok: false,
            msg: `Please contact to support`
        }]
    }
}

module.exports = { createEps }
