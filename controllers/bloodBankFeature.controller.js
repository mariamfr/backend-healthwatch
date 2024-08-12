//el nombre de la variable BloodBankFeature debe coincidir con el nombre del archivo BloodBankFeature.js
//BloodBankFeature es el modelo
const BloodBankFeatures = require('../models/BloodBankFeature')
const BloodBank = require('../models/BloodBank')

const createBloodBankFeature = async (req, res) => {
    try {
        let dbBloodBankFeature = BloodBankFeatures.find();
        if (!dbBloodBankFeature) {
            console.log(`await newBloodBankFeature.save();`)
            const newBloodBankFeature = new BloodBankFeatures(dbBloodBankFeature);
            await newBloodBankFeature.save();
            console.log(`finish newBloodBankFeature.save();`)
        }
        dbBloodBankFeature = await BloodBankFeatures.find();
        const dataBloodBankFeature = await BloodBank.find().select('features');
        if (!dbBloodBankFeature && !dataBloodBankFeature) {
            return res.status(400).json({
                ok: false,
                msg: `data BloodBank.Feature is empty`
            })
        }
        if (dbBloodBankFeature && dataBloodBankFeature && dbBloodBankFeature == dataBloodBankFeature) {
            return res.status(200).json({
                ok: true,
                msg: `data BloodBankFeature no changed`

            })
        }
        if (!dbBloodBankFeature && dataBloodBankFeature) {
            const updateBloodBankFeature = new BloodBankFeatures(dataBloodBankFeature);
            await updateBloodBankFeature.save()
            return res.status(201).json({
                ok: true,
                msg: `data BloodBankFeature created successfuly`
            })
        }
        // if (dbBloodBankFeature && !dataBloodBankFeature) {
        //     await BloodBankFeatures.DeleteMany()
        //     return res.status(201).json({
        //         ok: true,
        //         msg: `data BloodBankFeature delete successfuly`
        //     })
        // }
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            msg: 'createBloodBankFeature fail, please contact support'
        })
    }
}

const searchBloodBankFeature = async (req, res) => {
    try {
        const { searchtext } = req.query;
        if (!searchtext) {
            return res.status(400).json({
                ok: false,
                msg: 'Query parameter is required'
            });
        }
        // const BloodBankFeature = new BloodBankFeatures()
//        await BloodBankFeature.createBloodBankFeature(req, res)
        // if (res.ok) {
            const regex = new RegExp(searchtext, 'i'); // i for case insensitive
            // const [data] = await BloodBankFeatures.find(
            // {}
            // , { 'features.properties': 1, _id: 0 }); //{"features.properties.BANCO_DE_S": regex}
            // const [data] = await BloodBank.find().select({'features.properties.BANCO_DE_S': regex}); //{"features.properties.BANCO_DE_S": regex}    
            const [data] = await BloodBank.find().select('features -_id' ); //{"features.properties.BANCO_DE_S": regex}    
            const filter = data //.BANCO_DE_S; //{"features.properties.BANCO_DE_S": regex}    
            //    const result = filter.find({'properties.BANCO_DE_S': { $regex: /nacional/i }})
            if (!data)
                return res.status(404).json({
                    ok: false,
                    msg: `Ops! not found information by ${data}`,
                });
            return res.status(200).json({
                ok: true,
                msg: `Found information`,
                data: filter
            });
        // }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: `Server error ${error}`
        });
    }
}


module.exports = { createBloodBankFeature, searchBloodBankFeature }
