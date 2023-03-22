const express = require('express');
const router = express.Router();
const adminController = require('../controller/messages');

router.get('/data',adminController.Data);
router.get('/databyid/:id',adminController.DataId);
router.post('/data',adminController.dataPost);
router.put('/data/:id',adminController.dataUpdate);

module.exports = router;