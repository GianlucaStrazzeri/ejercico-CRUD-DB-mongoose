const express = require('express');
const router = express.Router();
const usersRoutes = require('./tasks');

router.use('/', tasksRoutes);

module.exports = router;