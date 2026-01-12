const express = require('express');
const router = express.Router();
const flightController = require('../controllers/flightController');

// Endpoint para consultar vuelos disponibles
router.get('/', flightController.getAvailableFlights);

module.exports = router;
