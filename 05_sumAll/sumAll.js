
const sumAll = function(int1,int2) {
    let arr = []
    let sum = 0
    let reverseArr = []
    const argOneType = typeof int1
    const argTwoType = typeof int2

    if (int1 < 0 || int2 < 0 || argOneType != 'number' || argTwoType != 'number') {
        return 'ERROR'
    }

    if (int1 > int2) {
        for (let i = int2; i <= int1; i++) {
            reverseArr.push(i)
        }
        for (i in reverseArr) {
            sum += reverseArr[i]
        }
    } else {
        for (let i = int1; i <= int2; i++) {
            arr.push(i)
        }
        for (i in arr) {
            sum += arr[i]
        }
    }

    return sum
};

console.log(sumAll(97,4))

// Do not edit below this line
module.exports = sumAll;
