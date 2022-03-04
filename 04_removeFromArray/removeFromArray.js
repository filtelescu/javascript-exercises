

const removeFromArray = function(anArray,toRemove) {
    let removed = Array.prototype.slice.call(arguments, 1)

    for (item in removed) {
        let testNum = removed[item]
        index = anArray.indexOf(testNum)

        if (index in anArray) {
            anArray.splice(index,1)
        }
    }

    return anArray
    // anArray.splice(index,1)
    
};

console.log(removeFromArray([1,4,3], 2,3))

// Do not edit below this line
module.exports = removeFromArray;
