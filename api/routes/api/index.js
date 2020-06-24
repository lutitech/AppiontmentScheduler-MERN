const express = require('express');
const router = express.Router();

const appointmentController = require('../../controllers/appointments.js')
const slotController = require('../../controllers/slot.js')

router.get('/appointments', appointmentController.all);
router.get('/retrieveSlots', slotController.all);
router.post('/appointmentCreate', appointmentController.create);




module.exports = router;