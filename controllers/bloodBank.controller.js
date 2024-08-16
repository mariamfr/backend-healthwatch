//el nombre de la variable BloodBank debe coincidir con el nombre del archivo BloodBank.js
//BloodBank es el modelo
const BloodBanks = require('../models/BloodBank')

const createBloodBank = async (req, res) => {
    // desestructurar el schema
    const bloodBanks = new BloodBanks(req.body)

    try {
        console.log("There are %d features in '%s' documents name ", bloodBanks.features.length, bloodBanks.name);
        if (bloodBanks.features.length == 0)
            return res.status(400).json({
                ok: false,
                msg: `Required valid data. There are ${bloodBanks.features.length} features in '${bloodBanks.name}' documents name ` //`Required valid data`
            })
        if (bloodBanks.name != 'bancosangre')
            return res.status(400).json({
                ok: false,
                msg: `Required valid data. Not enabled to documents ${bloodBanks.name}`
            })
        const totalDocuments = await BloodBanks.where({ "name": { $gte: 'bancosangre' | { $lt: 'bancosangre' } } }).countDocuments()
        console.log(totalDocuments)
        if (totalDocuments != 0) {
            const BloodBank = await BloodBanks.findOne({
                "type": bloodBanks.type,
                "name": bloodBanks.name,
                "crs.type": bloodBanks.crs.type,
                "crs.properties.name": bloodBanks.crs.properties.name
            })
            if (BloodBank) return res.status(409).json({
                ok: false,
                msg: `${BloodBank._id} is already exist in database`
            })
        }
        if (totalDocuments != 0) return res.status(400).json({
            ok: false,
            msg: `Database only admited one document, actually have ${totalDocuments}. Please deletes this before add new data`
        })

        const dbBloodBank = new BloodBanks(bloodBanks);
        await dbBloodBank.save();
        // await mongoose.connection.close();
        return res.status(201).json({
            ok: true,
            // msg: `${bloodBanks.name} created successfuly`
            msg: `Blood Banks created successfuly`
        })

    } catch (error) {
        console.error(`Please contact to support`, error)
        return res.status(500).json[{
            ok: false,
            msg: `Please contact to support ${'\r\n' + error}`
        }]
    }
}

const updateBloodBank = async (req, res) => {
    // desestructurar el schema
    const bloodBanks = new BloodBanks(req.body)

    try {
        console.log("There are %d features in '%s' documents name ", bloodBanks.features.length, bloodBanks.name);
        if (bloodBanks.features.length == 0)
            return res.status(400).json({
                ok: false,
                msg: `Required valid data. There are ${bloodBanks.features.length} features in '${bloodBanks.name}' documents name ` //`Required valid data`
            })
        if (bloodBanks.name != 'bancosangre')
            return res.status(400).json({
                ok: false,
                msg: `Required valid data. Not enabled to documents '${bloodBanks.name}'`
            })
        let BloodBank = await BloodBanks.findOne({
            "type": bloodBanks.type,
            "name": bloodBanks.name,
            "crs.type": bloodBanks.crs.type,
            "crs.properties.name": bloodBanks.crs.properties.name
        })
        if (!BloodBank)
            return res.status(400).json({
                ok: false,
                msg: `Document ${bloodBanks.name} not found with 'type': '${bloodBanks.type}', 'name': '${bloodBanks.name}', 'crs.type': '${bloodBanks.crs.type}', 'crs.properties.name': '${bloodBanks.crs.properties.name}'`
            })
        if (BloodBank) {
            await BloodBanks.deleteMany()
            await bloodBanks.save();
            return res.status(200).json({
                ok: true,
                msg: `Blood banks were successfully synchronized`
            })
        }
    } catch (error) {
        console.error(`Please contact to support`, error)
        return res.status(500).json[{
            ok: false,
            msg: `Please contact to support ${'\r\n' + error}`
        }]
    }
}


const getAllBloodBankFeature = async (req, res) => {
    try {
        const [features] = await BloodBanks.find().select('features.properties features.geometry -_id'); //{"features.properties.BANCO_DE_S": regex}    
        // console.log(features);
        const data = features.features
        return res.status(200).json({
            ok: true,
            msg: 'BloodBanks.Features found',
            data: data
        })
    } catch (error) {
        console.error(`getAllBloodBankFeature, Error getting BloodBanks.Features, please contact support`, error)
        return res.status(500).json({
            ok: false,
            msg: `getAllBloodBankFeature, Error getting BloodBanks.Feature, please contact support`
        })
    }
}


module.exports = { createBloodBank, updateBloodBank, getAllBloodBankFeature }
