const TypeAlert = require('./../models/TypeAlert')

const createTypeAlert = async(req, res) => {
    // desestructurar el schema
    const { description } = req.body
    console.log(`${description} recibido`)
    try {
        const typealert = await TypeAlert.findOne ({ description: description })
        if(typealert) return res.status(400).json({
            ok: false,
            msg: `${description} is already exist in database`
        })
        const dbTypeAlert = new TypeAlert ({
            description: description
        })
        //se graba el documento 
        await dbTypeAlert.save()
        return res.status(201).json({
            ok: true,
            msg: `${description} created successfuly`
        })

    } catch(error) {
        console.log(error)
        return res.status(500).json[{
            ok: false,
            msg: `Please contact to support`
        }]
    }
}


module.exports = {createTypeAlert }