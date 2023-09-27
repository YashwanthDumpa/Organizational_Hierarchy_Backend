"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Router } = require('express');
const { userController } = require('../controllers/userController');
const router = new Router();
router.get('/get-data', userController.verify);
exports.default = router;
