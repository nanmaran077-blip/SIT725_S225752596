const express = require("express");
const { calculateTotal } = require("./calculator");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("SIT725 6.2C Testing Project");
});

app.get("/api/hairdressers", (req, res) => {
    res.json([
        {
            id: 1,
            name: "Style Studio",
            service: "Haircut",
            price: 30
        },
        {
            id: 2,
            name: "Glow Hair Salon",
            service: "Hair Colouring",
            price: 80
        }
    ]);
});

app.post("/api/booking-total", (req, res) => {
    const { price, quantity } = req.body;

    try {
        const total = calculateTotal(price, quantity);
        res.json({ total });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

if (require.main === module) {
    app.listen(3000, () => {
        console.log("Server running on http://localhost:3000");
    });
}

module.exports = app;