export {}
const { Router } = require('express');
const {userController}  = require('../controllers/userController') 

const router = new Router();

router.get('/get-data/:id', userController.getData)

// router.get('/getOrganizationalHierarchy', userController.getData);
module.exports= router