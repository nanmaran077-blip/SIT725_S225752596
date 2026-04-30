function calculateTotal(price, quantity) {
    if (price < 0 || quantity < 0) {
        throw new Error("Price and quantity must be positive");
    }

    return price * quantity;
}

module.exports = { calculateTotal };