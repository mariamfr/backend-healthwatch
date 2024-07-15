//el nombre de la variable User debe coincidir con el nombre del archivo User.js
//User es el modelo
const User = require('./../models/User')
const bcrypt = require('bcrypt')

const createUser = async(req, res) => {
    // desestructurar el schema
    const {  email, password } = req.body
    try {
        const user = await User.findOne ({ email: email })
        if(user) return res.status(400).json({
            ok: false,
            msg: `${email} is already exist in database`
        })
        //algoritmo de encriptacion
        const salt = bcrypt.genSaltSync()

        const dbUser = new User ({
            email: email,
            password: password
        })
        //accedemos al password para encriptarlo
        dbUser.password = bcrypt.hashSync(password, salt)
        //se graba el documento para User
        await dbUser.save()
        return res.status(201).json({
            ok: true,
            msg: `${email} created successfuly`
        })

    } catch(error) {
        console.log(error)
        return res.status(500).json[{
            ok: false,
            msg: `Please ontact to support`
        }]
    }
}


module.exports = {createUser }