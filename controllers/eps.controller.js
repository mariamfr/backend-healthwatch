//el nombre de la variable Eps debe coincidir con el nombre del archivo Eps.js
//Eps es el modelo
const Eps = require('../models/Eps')

const createEps = async (req, res) => {
    // desestructurar el schema
    const eps = new Eps(req.body)

    try {
        console.log("There are %d features in '%s' documents name ", eps.features.length, eps.name);
        if (eps.features.length == 0)
            return res.status(400).json({
                ok: false,
                msg: `Required valid data. There are ${eps.features.length} features in '${eps.name}' documents name ` //`Required valid data`
            })
        if (eps.name != 'eps')
            return res.status(400).json({
                ok: false,
                msg: `Required valid data. Not enabled to documents ${eps.name}`
            })
        const totalDocuments = await Eps.where({ "name": { $gte: 'eps' | { $lt: 'eps' } } }).countDocuments()
        console.log(totalDocuments)
        if (totalDocuments != 0) {
            const Eps = await Eps.findOne({
                "type": eps.type,
                "name": eps.name,
                "crs.type": eps.crs.type,
                "crs.properties.name": eps.crs.properties.name
            })
            if (Eps) return res.status(409).json({
                ok: false,
                msg: `${Eps._id} is already exist in database`
            })
        }
        if (totalDocuments != 0) return res.status(400).json({
            ok: false,
            msg: `Database only admited one document, actually have ${totalDocuments}. Please deletes this before add new data`
        })

        const dbEps = new Eps(eps);
        await dbEps.save();
        // await mongoose.connection.close();
        return res.status(201).json({
            ok: true,
            // msg: `${eps.name} created successfuly`
            msg: `Eps created successfuly`
        })

    } catch (error) {
        console.error(`Please contact to support`, error)
        return res.status(500).json[{
            ok: false,
            msg: `Please contact to support ${'\r\n' + error}`
        }]
    }
}

const updateEps = async (req, res) => {
    // desestructurar el schema
    const eps = new Eps(req.body)

    try {
        console.log("There are %d features in '%s' documents name ", eps.features.length, eps.name);
        if (eps.features.length == 0)
            return res.status(400).json({
                ok: false,
                msg: `Required valid data. There are ${eps.features.length} features in '${eps.name}' documents name ` //`Required valid data`
            })
        if (eps.name != 'eps')
            return res.status(400).json({
                ok: false,
                msg: `Required valid data. Not enabled to documents '${eps.name}'`
            })
        let Eps = await Eps.findOne({
            "type": eps.type,
            "name": eps.name,
            "crs.type": eps.crs.type,
            "crs.properties.name": eps.crs.properties.name
        })
        if (!Eps)
            return res.status(400).json({
                ok: false,
                msg: `Document ${eps.name} not found with 'type': '${eps.type}', 'name': '${eps.name}', 'crs.type': '${eps.crs.type}', 'crs.properties.name': '${eps.crs.properties.name}'`
            })
        if (Eps) {
            await Eps.deleteMany()
            await eps.save();
            return res.status(200).json({
                ok: true,
                msg: `Eps were successfully synchronized`
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


const getAllEpsFeature = async (req, res) => {
    try {
        const [features] = await Eps.find().select('features.properties features.geometry -_id'); //{"features.properties.BANCO_DE_S": regex}    
        // console.log(features);
        const data = features.features
        return res.status(200).json({
            ok: true,
            msg: 'Eps.Features found',
            data: data
        })
    } catch (error) {
        console.error(`getAllEpsFeature, Error getting Eps.Features, please contact support`, error)
        return res.status(500).json({
            ok: false,
            msg: `getAllEpsFeature, Error getting Eps.Feature, please contact support`
        })
    }
}


module.exports = { createEps, updateEps, getAllEpsFeature }
