//Model
const Main = require('./../models/main');
// Functions
const { findKeysFromObject, errorResponse, errorResponseFromMessage, dataResponse } = require('./../functions/global');
const { makeMongoQuery, makeMongoUpdateObject, makeDeleteQuery, makeUpdateManyCondition } = require('./../functions/mongo');
// Configs
const { databaseKeys } = require('./../configs');
const { keyPaths: mainKeyPaths } = databaseKeys.main;
// Redis
const { redisClient } = require('./../functions/redis');
// Methods
module.exports = {
    createOne: async (req, res) => {
        const data = findKeysFromObject((req.body), [])
        // Inner fields
        Object.assign(data, {
            meta: findKeysFromObject(req.body, [])
        })
        try {
            const mainData = await Main.create(data)
            return dataResponse(mainData);
        } catch (error) {
            console.log(error)
            errorResponseFromMessage(error.message, res)
        }
    },
    findMany: async (req, res) => {
        const query = makeMongoQuery(req.query, mainKeyPaths);
        try {
            const result = await Main.find(query).limit(req.query.limit || 10).skip(req.query.skip || 0).sort({ [req.query.sort || 'createdAt']: (req.query.order || 'asc') });
            if (result.length == 0) return errorResponse(404, 5, res);
            return dataResponse(result, res);
        } catch (error) {
            console.log(error)
            errorResponseFromMessage(error.message, res)
        }
    },
    findOne: async (req, res) => {
        try {
            const result = await Main.findOne({ _id: req.params.id });
            if (!result) return errorResponse(404, 5, res);
            return dataResponse(result, res);
        } catch (error) {
            console.log(error)
            errorResponseFromMessage(error.message, res)
        }
    },
    updateOne: async (req, res) => {
        let update = findKeysFromObject(req.body, [])
        update = makeMongoUpdateObject(update, mainKeyPaths);
        try {
            const updated = await Main.findOneAndUpdate({ _id: req.params.id }, update, { new: true });
            if (!updated) return errorResponse(404, 5, res) // Not found data error
        } catch (error) {
            console.log(error)
            errorResponseFromMessage(error.message, res)
        }
    },
    updateMany: async (req, res) => {
        const updateCondition = makeUpdateManyCondition((req.query), keyPaths);
        const updateBody = findKeysFromObject((req.body), []);
        try {
            const updated = await Main.updateMany(updateCondition, updateBody);
        } catch (error) {
            console.log(error)
            errorResponseFromMessage(error.message, res)
        }
    },
    removeOne: async (req, res) => {
        try {
            const deleted = await Main.findOneAndDelete({ _id: req.params.id })
            if (!deleted) return errorResponse(404, 5, res) // Error for not found data
        } catch (error) {
            console.log(error)
            errorResponseFromMessage(error.message, res)
        }
    },
    removeMany: async (req, res) => {
        const deleteQuery = makeDeleteQuery((req.query), mainKeyPaths)
        try {
            const deleted = await Main.deleteMany(deleteQuery);
        } catch (error) {
            console.log(error)
            errorResponseFromMessage(error.message, res)
        }
    },
    login: async (req, res) => {
        try {
            await redisClient.set(req.body.code, true);
            return res.status(200).send({ sucess: true })
        } catch (error) {
            console.log(error)
            errorResponseFromMessage(error.message, res)
        }
    }
}