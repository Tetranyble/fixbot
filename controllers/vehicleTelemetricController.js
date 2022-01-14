const Telemetric = require('../models/vehicleTelemetricsSchema')
const asyncWrapper = require('../middleware/async')
const { createCustomError } = require('../errors/custom-error')

//this controller follows laravel controller method structure
const index = asyncWrapper(async (req, res) => {
  const telemetric = await Telemetric.find({})
  res.status(200).json({ telemetric })
})

const create = asyncWrapper(async (req, res) => {
  const telemetric = await Telemetric.create(req.body)
  res.status(201).json({ telemetric })
})

const show = asyncWrapper(async (req, res, next) => {
  const { id: telemetric } = req.params
  const telemetric = await Telemetric.findOne({ _id: telemetric })
  if (!telemetric) {
    return next(createCustomError(`No telemetric with id : ${telemetric}`, 404))
  }

  res.status(200).json({ telemetric })
})


const update = asyncWrapper(async (req, res, next) => {
  const { id: telemetric } = req.params

  const telemetric = await Telemetric.findOneAndUpdate({ _id: telemetric }, req.body, {
    new: true,
    runValidators: true,
  })

  if (!telemetric) {
    return next(createCustomError(`No telemetric with id : ${telemetric}`, 404))
  }

  res.status(200).json({ telemetric })
})

const destroy = asyncWrapper(async (req, res, next) => {
  const { id: telemetric } = req.params
  const telemetric = await Telemetric.findOneAndDelete({ _id: telemetric })
  if (!telemetric) {
    return next(createCustomError(`No telemetric with id : ${telemetric}`, 404))
  }
  res.status(200).json({ telemetric })
})

module.exports = {
  index,
  create,
  show,
  update,
  destroy
}
