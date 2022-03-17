
const leapYears = function(year) {
    if (year % 100 === 0 && year % 400 === 0) {
        console.log("yeah")
        return true
    } else if (year % 100 === 0) {
        console.log("yeah")
        return false
    } else if (year % 4 === 0) {
        console.log("yeah")
        return true
    } else {
        return false
    }
};

console.log(leapYears(1997))

// Do not edit below this line
module.exports = leapYears;
