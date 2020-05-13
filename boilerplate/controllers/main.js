// Packages
const elasticsearch = require('elasticsearch');
//Model
const Main = require('./../models/main');
// Functions
const { findKeysFromObject, errorResponse, errorResponseFromMessage, dataResponse } = require('./../functions/global');
const { makeMongoQuery, makeMongoUpdateObject, makeDeleteQuery, makeUpdateManyCondition } = require('./../functions/mongo');
// Configs
const { databaseKeys } = require('./../configs');
const { keyPaths: mainKeyPaths } = databaseKeys.main;
// Methods
module.exports = {
    createOne: async () => {
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
    findMany: async () => {
        const query = makeMongoQuery(req.query, mainKeyPaths);
        try {
            const result = await Main.find(query);;
            if (result.length == 0) return errorResponse(404, 5, res);
            return dataResponse(result, res);
        } catch (error) {
            console.log(error)
            errorResponseFromMessage(error.message, res)
        }
    },
    findOne: async () => {
        try {
            const result = await Main.findOne({ _id: req.params.id });
            if (!result) return errorResponse(404, 5, res);
            return dataResponse(result, res);
        } catch (error) {
            console.log(error)
            errorResponseFromMessage(error.message, res)
        }
    },
    updateOne: async () => {
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
    updateMany: async () => {
        const updateCondition = makeUpdateManyCondition((req.query), keyPaths);
        const updateBody = findKeysFromObject((req.body), []);
        try {
            const updated = await Main.updateMany(updateCondition, updateBody);
        } catch (error) {
            console.log(error)
            errorResponseFromMessage(error.message, res)
        }
    },
    removeOne: async () => {
        try {
            const deleted = await Main.findOneAndDelete({ _id: req.params.id })
            if (!deleted) return errorResponse(404, 5, res) // Error for not found data
        } catch (error) {
            console.log(error)
            errorResponseFromMessage(error.message, res)
        }
    },
    removeMany: async () => {
        const deleteQuery = makeDeleteQuery((req.query), mainKeyPaths)
        try {
            const deleted = await Main.deleteMany(deleteQuery);
        } catch (error) {
            console.log(error)
            errorResponseFromMessage(error.message, res)
        }
    }
}