const reverseString = function(string) {

    let splitString = string.split("")
    splitString = splitString.reverse()
    splitString = splitString.join("")

    return splitString

};

reverseString("hello")

// Do not edit below this line
module.exports = reverseString;
