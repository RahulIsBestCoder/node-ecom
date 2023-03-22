const express = require('express');
const router = express.Router();
const userController = require('../controller/user');

router.get('/user',userController.Data);
router.get('/userbyid/:id',userController.DataId);
router.post('/user',userController.dataPost);
router.put('/user/:id',userController.dataUpdate);

module.exports = router;