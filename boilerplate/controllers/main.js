// Packages
const elasticsearch = require('elasticsearch');
//Model
const Main = require('./../models/main');
// Functions
const { findKeysFromObject } = require('./../functions/global');
const { makeMongoQuery, makeMongoUpdateObject, makeDeleteQuery } = require('./../functions/mongo');
// Configs
const { databaseKeys } = require('./../configs');
const { keyPaths: mainKeyPaths } = databaseKeys.main;
// Methods
module.exports = {
    createOne: async () => {
        // Check body and set them in correct path
        // Main keys
        const data = findKeysFromObject((req.body), [])
        // Inner fields
        Object.assign(data, {
            meta: findKeysFromObject(req.body, [])
        })
        try {
            // Create data in mongodb
            const mainData = await Main.create(data)

        } catch (error) {
            console.log(error)
        }
    },
    findMany: async () => {
        // Make query for mongodb
        const query = makeMongoQuery(req.query, mainKeyPaths);
        try {
            const result = await Main.paginate(query)
        } catch (error) {
            console.log(error)
        }
    },
    findOne: async () => {
        try {
            const result = await Main.findOne({ _id: req.params.id });
        } catch (error) {
            console.log(error)
        }
    },
    updateOne: async () => {
        let update = findKeysFromObject(req.body, ['name', 'email', 'location'])
        update = makeMongoUpdateObject(update, mainKeyPaths);
        try {
            const updated = await Main.findOneAndUpdate({ _id: req.params.id }, update, { new: true });
            if (!updated) return // Not found data error
        } catch (error) {
            console.log(error)
        }
    },
    updateMany: async () => {

    },
    removeOne: async () => {
        try {
            const deleted = await Main.findOneAndDelete({ _id: req.params.id })
            if (!deleted) return // Error for not found data
        } catch (error) {
            console.log(error)
        }
    },
    removeMany: async () => {
        const deleteQuery = makeDeleteQuery((req.query), mainKeyPaths)
        try {
            const deleted = await Main.deleteMany(deleteQuery);
        } catch (error) {
            console.log(error);
        }
    }
}