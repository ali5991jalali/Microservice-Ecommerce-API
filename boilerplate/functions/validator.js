const customValidator = {
    isArray: function (data) {
        return Array.isArray(data)
    },
    isObject: function (data) {
        if (typeof (data) == 'object' && data != null) return true;
        return false;
    }
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