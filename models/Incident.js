const{ Schema, model } = require('mongoose')

const incidentSchema = Schema({
    dateIncident: {
        type: Date,
        default: Date.now,
        require: true
    },
    nameIncident: {
        type: String,
        require: true,
        unique: true
    },
    description: {
        type: String,
        require: true,
        unique: true
    }
})

module.exports = model('Incidents', incidentSchema)


