function calculateCartTotal(items) {
  if (!Array.isArray(items)) {
    throw new TypeError("items must be an array");
  }

  return items.reduce((total, item) => {
    if (typeof item !== "object" || item === null) {
      throw new TypeError("each item must be an object");
    }

    const { price, quantity } = item;

    if (typeof price !== "number" || Number.isNaN(price) || price < 0) {
      throw new TypeError("price must be a non-negative number");
    }

    if (!Number.isInteger(quantity) || quantity < 0) {
      throw new TypeError("quantity must be a non-negative integer");
    }

    return total + price * quantity;
  }, 0);
}

module.exports = calculateCartTotal;