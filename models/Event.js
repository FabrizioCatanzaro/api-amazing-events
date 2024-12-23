const mongoose = require('mongoose');

// Esquema de Evento
const eventSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    date: { type: Date, required: true },
    capacity: { type: Number, required: true },
    assistance: { type: Number }, // Opcional, solo eventos pasados
    estimate: { type: Number }, // Opcional, eventos futuros
},  { timestamps: true });

module.exports = mongoose.model('Event', eventSchema);
