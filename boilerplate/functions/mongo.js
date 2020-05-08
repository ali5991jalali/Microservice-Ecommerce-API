// MongoDB methods
module.exports = {
    makeMongoQuery(query, keyPaths) {
        const result = {};
        keyPaths.forEach(key => {
            if (query.hasOwnProperty(key)) {
                result[(keyPaths[key])] = query[key];
            }
        });
        return result;
    },
    makeMongoUpdateBody(object, keyPaths) {
        const result = {};
        keyPaths.forEach(key => {
            if (query.hasOwnProperty(key)) {
                result[(keyPaths[key])] = object[key];
            }
        });
        return result;
    },
    makeDeleteCondition(query, keyPaths) {
        const result = {};
        keyPaths.forEach(key => {
            if (query.hasOwnProperty(key)) {
                result[(keyPaths[key])] = query[key];
            }
        });
        return result;
    },
    makeUpdateManyCondition(query, keyPaths) {
        const result = {};
        keyPaths.forEach(key => {
            if (query.hasOwnProperty(key)) {
                result[(keyPaths[key])] = query[key];
            }
        });
        return result;
    }
}