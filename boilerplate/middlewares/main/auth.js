// Packages
const redis = require('async-redis');
// Functions
const { errorResponse, errorResponseFromMessage } = require('./../../functions/global');
// Configs
const { } = process.env;

module.exports = {
    authorization: (req, res, next) => {
        if (!(req.headers).hasOwnProperty('authorization')) return errorResponse(403, 3, res);
        try {
            const code = await redis.get((req.headers.authorization));
            if (!code) return errorResponse(403, 3, res);
            return next();
        } catch (error) {
            console.log(error);
            return errorResponseFromMessage(error.message)
        }
    }
}