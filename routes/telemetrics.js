const express = require('express')
const router = express.Router()

const {
  index,
  create,
  show,
  update,
  destroy,
} = require('../controllers/vehicleTelemetricController')

router.route('/').get(index).post(create)
router.route('/:id').get(show).patch(update).delete(destroy)

module.exports = router
