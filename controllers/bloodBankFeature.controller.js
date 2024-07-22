//el nombre de la variable BloodBankFeature debe coincidir con el nombre del archivo BloodBankFeature.js
//BloodBankFeature es el modelo
const BloodBankFeatures = require('../models/BloodBankFeature')

const createBloodBankFeature = async(req, res) => {
    // desestructurar el schema
    const  bloodBankFeatures  = req.body

  try {
        const BloodBankFeature = await BloodBankFeatures.findOne ({
             "type": bloodBankFeatures.type,
            "name": bloodBankFeatures.name,
            "crs.type": bloodBankFeatures.crs.type,
            "crs.properties.name": bloodBankFeatures.crs.properties.name
          })
        if(BloodBankFeature) return res.status(409).json({
            ok: false,
            msg: `${BloodBankFeature._id} is already exist in database`
        })

        const dbBloodBankFeature = new BloodBankFeatures ( bloodBankFeatures );
        await dbBloodBankFeature.save();
        // await mongoose.connection.close();
        return res.status(201).json({
            ok: true,
            // msg: `${bloodBankFeatures.name} created successfuly`
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

const searchBloodBankFeature = async(req, res) => {
    try {
        const { searchtext } = req.query;
        if (!searchtext) {
            return res.status(400).json({ 
                ok: false,
                msg: 'Query parameter is required' });
        }
        const regex = new RegExp(searchtext, 'i'); // i for case insensitive
            // const [data] = await BloodBankFeatures.find(
            // {}
            // , { 'features.properties': 1, _id: 0 }); //{"features.properties.BANCO_DE_S": regex}
        const [data] = await BloodBankFeatures.find().select('features.properties'); //{"features.properties.BANCO_DE_S": regex}    
        const filter = data.features; //{"features.properties.BANCO_DE_S": regex}    
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
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: `Server error ${error}` });
    }
}


module.exports = { createBloodBankFeature, searchBloodBankFeature }
