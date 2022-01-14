const mongoose = require('mongoose')

const VehicleTelemetricsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'must provide name'],
    trim: true,
    maxlength: [20, 'name can not be more than 20 characters'],
  },
  engineTemperature: {
    type: Number,
    required: [true, 'engine temperature must be provided'],
    trim: true,
  },
  longitude: {
    type: mongoose.Decimal128,
    required: [true, 'longitude must be provided'],
    trim: true,
  },
  latitude: {
    type: mongoose.Decimal128,
    required: [true, 'latitude must be provided'],
    trim: true,
  },
  fuelConsumptionRate: {
    type: mongoose.Decimal128,
    required: [true, 'fuel consumption rate must be provided'],
    trim: true,
  },
  speed: {
    type: Number,
    required: [true, 'speed must be provided'],
    trim: true,
  }
})

module.exports = mongoose.model('VehicleTelemetrics', VehicleTelemetricsSchema)
