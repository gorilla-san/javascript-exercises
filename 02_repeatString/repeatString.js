const repeatString = function(string, number) {
    stringSum = ""    
    if (number < 0) {
        return "ERROR"
    }
    else {
        for (i=0; i<number; i++) {
            stringSum += string
        }
        return stringSum
    }
};

// Do not edit below this line
module.exports = repeatString;
