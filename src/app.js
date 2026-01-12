const express = require('express');
const cors = require('cors');
const flightRoutes = require('./routes/flightRoutes');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/flights', flightRoutes);

module.exports = app;
