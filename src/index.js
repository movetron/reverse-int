module.exports = function reverse (n) {
    const isNegative = n < 0;
  const reversedNumber = parseInt(Math.abs(n).toString().split('').reverse().join(''), 10);
  return isNegative ? Math.abs(reversedNumber) : reversedNumber;
}
