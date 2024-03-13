function sum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Invalid Input Providied");
  }
  return a + b;
}

module.exports = sum;
