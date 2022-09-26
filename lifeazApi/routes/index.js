const router = require('express').Router();

const { defibrilateurController } = require('../controllers');

//Route 
router.get('/defibrilateur', defibrilateurController.getAllDefibrilateur);

module.exports = router;

