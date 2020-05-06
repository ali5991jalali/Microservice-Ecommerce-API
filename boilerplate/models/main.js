// Packages
const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const timestamp = require('mongoose-timestamp');
// Setting mongoose
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
// Configs
const configs = {
    model: 'Main',
    modelName: 'Main'
}
// Schema
const Schema = mongoose.Schema;
// Create schema and define indexes in field level
const schema = new Schema({

}, {
        minimize: false
    }
)
// Plugins
schema.plugin(timestamp);
schema.plugin(paginate);

// Define indexes in shema level
schema.index({})
// Model
const model = mongoose.model(configs.model, schema, configs.modelName);
// Export 
module.exports = model;