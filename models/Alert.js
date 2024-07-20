const{ Schema, model } = require('mongoose')

const alertSchema = Schema({
    dateAlert: {
        type: Date,
        default: Date.now,
        require: true
    },
    description: {
        type: String,
        require: true,
        unique: true
    },
    typeAlert: { type: Schema.Types.ObjectId, ref: 'TypeAlert' },
    notificationSms: {
        type: Boolean
    },
    notificationEmail: {
        type: Boolean
    },
    frecuency: {
        type: Number,
        requiere: true
    }
})

module.exports = model('Alerts', alertSchema)


