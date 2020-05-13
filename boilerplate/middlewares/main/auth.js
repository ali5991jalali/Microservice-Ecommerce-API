// Packages
const redis = require('async-redis');
// Functions
const { errorResponse, errorResponseFromMessage } = require('./../../functions/global');
// Configs
const { } = process.env;

module.exports = {
    authorization: (req, res, next) => {
        if (!(req.headers).hasOwnProperty('authorization')) return res.status(403).send(errorResponse(3));
        try {
            const code = await redis.get((req.headers.authorization));
            if (!code) return res.status(403).send(errorResponse(3));
            return next();
        } catch (error) {
            console.log(error);
            return errorResponseFromMessage(error.message)
        }
    }
}