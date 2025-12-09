const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const INVENTORY_FILE = './backend/inventory.json';

// Get all products
app.get('/products', (req, res) => {
    const data = JSON.parse(fs.readFileSync(INVENTORY_FILE));
    res.json(data);
});

// Update inventory after sale
app.post('/checkout', (req, res) => {
    const soldItems = req.body.items;
    const data = JSON.parse(fs.readFileSync(INVENTORY_FILE));

    soldItems.forEach(item => {
        const product = data.find(p => p.id === item.id);
        if (product) product.stock -= item.quantity;
    });

    fs.writeFileSync(INVENTORY_FILE, JSON.stringify(data, null, 2));
    res.json({ success: true });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
