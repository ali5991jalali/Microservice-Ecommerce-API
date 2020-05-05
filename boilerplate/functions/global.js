// Packages
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const validator = require('validator');
// ENV
const { PORT, MONGO_ADDRESS } = process.env;
// Configs

// Functions

// Methods
module.exports = {
    routerSetting(app) {
        app.listen(PORT, () => {
            console.log(`Application is running on port ${PORT}`)
        })
        app.use(bodyParser.json());
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
    }
}