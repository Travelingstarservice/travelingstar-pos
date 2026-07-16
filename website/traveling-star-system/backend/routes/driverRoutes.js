const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');
const auth = require('../middleware/auth');

// DRIVER: Get assigned rides
router.get('/assigned', auth('driver'), async (req, res) => {
    try {
        const rides = await Booking.find({ driverId: req.user.id });
        res.json(rides);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// DRIVER: Start trip
router.put('/start/:id', auth('driver'), async (req, res) => {
    try {
        const ride = await Booking.findByIdAndUpdate(
            req.params.id,
            { status: 'in-progress' },
            { new: true }
        );
        res.json(ride);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// DRIVER: Complete trip
router.put('/complete/:id', auth('driver'), async (req, res) => {
    try {
        const ride = await Booking.findByIdAndUpdate(
            req.params.id,
            { status: 'completed' },
            { new: true }
        );
        res.json(ride);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
