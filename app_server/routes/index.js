const express = require('express');
const router = express.Router();

// bring in controllers
const mainController = require('../controllers/main');
const travelController = require('../controllers/travel');

// home page
router.get('/', mainController.index);

// travel page
router.get('/travel', travelController.travelList);

module.exports = router;