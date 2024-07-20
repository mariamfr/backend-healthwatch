const Alert = require("../models/Alert");

const createAlert = async(req, res) => {
    const {dateAlert, description, notificationSms, notificationEmail, frecuency, typeAlert } = req.body
    try {
        const alert = await Alert.findOne({ description:description})
        if(alert) return res.status(400).json({
            ok: false,
            msg: `${description} is already exist in database`
        })
        //nuevo objeto
        const dbAlert = new Alert({
            dateAlert: dateAlert,
            description: description,
            typeAlert: typeAlert,
            notificationSms: notificationSms,
            notificationEmail: notificationEmail,
            frecuency: frecuency
        })
        //guardar el objeto
        await dbAlert.save()
        return res.status(201).json({
            ok: true,
            msg: `${description} created successfuly`
        })
    } catch(error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            msg: 'createAlert fail, please contact support'
        })
    }
}

/*
const getAllAlerts = async(req, res) => {
    try {
        const alerts = await Alert.find()
    } catch(error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            msg: 'getAllAlerts fail, please contact support'
    } 
}
*/


module.exports = { createAlert }