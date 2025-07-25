module.exports = function reverse(n) {
  const str = String(n < 0 ? -n : n);
  return parseInt(str.split('').reverse().join(''), 10);
};
