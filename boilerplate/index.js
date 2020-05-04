// Packages
const express = require('express');
const dotenv = require('dotenv');
// Router
const app = express();
// Functions
const { routerSetting, connections } = require('./functions/global');
// Router setting
routerSetting(app);
// Connections
connections();
// Routes
app.use(require('./routes/index'));
// Create router
const app = express();
