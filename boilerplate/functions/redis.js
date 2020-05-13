// Packages
const redis = require('async-redis');

module.exports = {
    redisClient: redis.createClient()
}