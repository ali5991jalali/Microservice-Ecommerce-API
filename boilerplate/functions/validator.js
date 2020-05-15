// Packages
const validator = require('validator');
// Custom validator methods
const customValidator = {
    isArray: function (data) {
        return Array.isArray(data)
    },
    isObject: function (data) {
        if (typeof (data) == 'object' && data != null) return true;
        return false;
    },
    isBoolean: function (data) {
        return /^(true|false)$/.test(data)
    },
    isMongoId: function (data) {
        return validator.isMongoId(data);
    }
}

const correctType = () => {

}

module.exports = {
    checkExistanceFields(object, keys) {
        return new Promise((resolve, reject) => {
            keys.forEach(key => {
                if (object.hasOwnProperty(key)) reject()
            });
            resolve();
        })
    }
}