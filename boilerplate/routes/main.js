// Packages
const express = require('express');
// Router
const router = express.Router();
// Functions
const { } = require('./../functions/global');
// Controllers
const controller = require('./../controllers/main');
// Middlewares
const paramValidation = require('./../middlewares/main/paramValidation');
// Routes
router
    .post('/', controller.createOne)
    .get('/', controller.findMany)
    .get('/:id', controller.findOne)
    .put('/:id', controller.updateOne)
    .put('/', controller.updateMany)
    .delete('/', controller.removeMany)
    .delete('/:id', controller.removeOne)