// Datos simulados de vuelos
const flights = [
  { id: 1, destination: 'Quito', time: '08:00', availableSeats: 20 },
  { id: 2, destination: 'Guayaquil', time: '10:30', availableSeats: 15 },
  { id: 3, destination: 'Cuenca', time: '14:00', availableSeats: 5 }
];

// Controller para obtener vuelos
exports.getAvailableFlights = (req, res) => {
  try {
    res.status(200).json({
      success: true,
      data: flights
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener los vuelos',
      error: error.message
    });
  }
};
