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
    }
}