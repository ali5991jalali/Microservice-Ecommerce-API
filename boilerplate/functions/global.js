// Packages
const bodyParser = require('body-parser');
// ENV
const { PORT } = process.env;
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

    }
}