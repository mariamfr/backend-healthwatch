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

const searchBloodBank = async(req, res) => {
    try {
        const { searchtext } = req.query;
        if (!searchtext) {
            return res.status(400).json({ 
                ok: false,
                msg: 'Query parameter is required' });
        }
        const regex = new RegExp(searchtext, 'i'); // i for case insensitive
            // const [data] = await BloodBanks.find(
            // {}
            // , { 'features.properties': 1, _id: 0 }); //{"features.properties.BANCO_DE_S": regex}
        const [data] = await BloodBanks.find().select('features.properties'); //{"features.properties.BANCO_DE_S": regex}    
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


module.exports = { createBloodBank, searchBloodBank }
