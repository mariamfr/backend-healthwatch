const { Schema, model } = require('mongoose')

const userSchema = Schema({
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    username: {
        type: String,
        require: true
    }
})

module.exports = model('Users', userSchema)