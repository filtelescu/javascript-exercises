const ftoc = function(degrees) {
  let celcius = 0;
  celcius = (degrees-32)*(5/9)
  celcius = celcius.toFixed(1)
  toInt = parseFloat(celcius)
  return toInt
};

const ctof = function(degrees) {
  let fern = 0;
  fern = (degrees * (9/5)) + 32
  fern = fern.toFixed(1)
  toInt = parseFloat(fern)
  return toInt
};

console.log(ftoc(100))

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
