// Packages
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const validator = require('validator');
// ENV
const { PORT, MONGO_ADDRESS } = process.env;
// Configs
const { errors } = require('./../configs');
// Functions

// Methods
module.exports = {
    routerSetting(app) {
        app.listen(PORT, () => console.log(`Application is running on port ${PORT}`))
        app.use(bodyParser.json())
        app.use(bodyParser.urlencoded({ extended: true }))
    },
    connections() {
        mongoose.connect(MONGO_ADDRESS, (error) => {
            if (error) console.log(error)
            else console.log(`MongoDB is running successfully`)
        })
    },
    convertQueryIdsToArray(ids) {
        const result = [];
        const array = ids.trim().split(',');
        array.forEach((id) => {
            if (validator.isMongoId(id.trim())) result.push(id.trim())
        })
        return result;
    },
    findKeysFromObject(object, keys) {
        const result = {};
        keys.forEach((key) => {
            if (object.hasOwnProperty('key')) result[key] = object[key];
        })
        return result;
    },
    convertQueryFieldsToArray(fields) {
        const result = []
        fields = (fields.trim()).split(',');
        fields.forEach((field) => {
            if (field.trim().length != 0) result.push(field.trim())
        })
        return result;
    },
    errorResponse(status, code, res) {
        return res.status(status).send({
            sucess: false,
            error: {
                code,
                message: errors[code]
            }
        })
    },
    dataResponse(data, res) {
        return res.status(200).send({
            sucess: true,
            data
        })
    },
    errorResponseFromMessage(error, res) {
        let code = 4;
        let status = 500;
        return res.status(status).send({
            sucess: false,
            error: {
                code,
                message: errors[code]
            }
        })
    }
}