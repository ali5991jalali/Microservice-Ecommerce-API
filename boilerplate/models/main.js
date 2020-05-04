// Packages
const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const timestamp = require('mongoose-timestamp');
// Configs
const configs = {
    model: 'Main',
    modelName: 'Main'
}
// Schema
const Schema = mongoose.Schema;
// Model schema
const schema = new Schema({

})
// Plugins
schema.plugin(timestamp);
schema.plugin(paginate);
// Model
const model = mongoose.model(configs.model, schema, configs.modelName);
// Export 
module.exports = model;