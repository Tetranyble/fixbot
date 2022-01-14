const express = require('express')
const router = express.Router()

const {
  index,
  create,
  show,
  update,
  destroy,
} = require('../controllers/vehicleTelemetricController')


/**
 * @swagger
 * components:
 *   schemas:
 *     Telemetric:
 *       type: object
 *       required:
 *         - name
 *         - engineTemperature
 *         - latitude
 *         - longitude
 *         - fuelConsumptionRate
 *         - speed
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the telemetric
 *         engineTemperature:
 *           type: number
 *           description: engine temperature
 *         latitude:
 *           type: number
 *           description: latitude of the vehicle
 *         longitude:
 *           type: number
 *           description: longitude of the vehicle
 *         fuelConsumptionRate:
 *           type: number
 *           description: fuel consumption rate of the vehicle
 *         name:
 *           type: string
 *           description: vehicle name
 *         speed:
 *           type: number
 *           description: vehicle speed
 *       example:
 *         id: d5fEhaiuhfgdjkbhduh8fdnckdjkd
 *         engineTemperature: 67.67
 *         latitude: 4.09984874
 *         longitude: 10.9787877
 *         fuelConsumptionRate: 4
 *         name: BMW
 *         speed: 167
 */

 /**
  * @swagger
  * tags:
  *   name: Vehicle monitering metrics API
  *   description: The Vehicle management and metrics API
  */



/**
 * @swagger
 * /api/v1/telemetrics:
 *   get:
 *     summary: Returns the list of all the telemetrics
 *     tags: [Metrics]
 *     responses:
 *       200:
 *         description: The list of the telemetric
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Telemetric'
 */
router.route('/').get(index)

/**
 * @swagger
 * /api/v1/telemetrics:
 *   post:
 *     summary: Create a new telemetric record
 *     tags: [Metrics]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Telemetrics'
 *     responses:
 *       200:
 *         description: The telemetric was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Telemetrics'
 *       500:
 *         description: Some server error
 */
.post(create)


/**
 * @swagger
 * /api/v1/telemetrics/{id}:
 *   get:
 *     summary: Get the metric by id
 *     tags: [Metrics]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The telemetric id
 *     responses:
 *       200:
 *         description: The telemetric description by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Telemetrics'
 *       404:
 *         description: The telemtric was not found
 */
router.route('/:id').get(show)

/**
 * @swagger
 * /api/v1/telemetrics/{id}:
 *  patch:
 *    summary: Update the telemetric by the id
 *    tags: [Metrics]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The telemetric id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Telemetric'
 *    responses:
 *      200:
 *        description: The telemetric was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Telemetric'
 *      404:
 *        description: The telemetric was not found
 *      500:
 *        description: Some error happened
 */
.patch(update)


/**
 * @swagger
 * /api/v1/telemetrics/{id}:
 *   delete:
 *     summary: Remove the telemetric by id
 *     tags: [Metrics]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The telemetric id
 * 
 *     responses:
 *       200:
 *         description: The telemetric was deleted
 *       404:
 *         description: The telemetric was not found
 */
.delete(destroy)

module.exports = router
