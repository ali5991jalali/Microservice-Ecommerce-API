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
    .post('/')
    .get('/')
    .get('/:id')
    .put('/:id')
    .put('/')
    .delete('/')
    .delete('/:id')