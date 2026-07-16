const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');
const auth = require('../middleware/auth');

// CREATE BOOKING (staff + admin)
router.post('/', auth(), async (req, res) => {
    try {
        const booking = await Booking.create(req.body);
        res.json(booking);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET ALL BOOKINGS (admin + staff)
router.get('/', auth(), async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.json(bookings);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ASSIGN DRIVER (admin only)
router.put('/assign/:id', auth('admin'), async (req, res) => {
    try {
        const booking = await Booking.findByIdAndUpdate(
            req.params.id,
            { driverId: req.body.driverId },
            { new: true }
        );
        res.json(booking);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
