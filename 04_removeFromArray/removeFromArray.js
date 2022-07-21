const removeFromArray = function(randomArray = [], ...theArgs) {
        let aLen = theArgs.length;
        // console.log(aLen)
        // console.log(randomArray)
        for (i=0; i<aLen; i++) {
            if (randomArray.includes(theArgs[i])) {
                let aEIndex = randomArray.indexOf(theArgs[i])
                randomArray.splice(aEIndex, 1)
            }
            else continue
        }
    return randomArray
};



// Do not edit below this line
module.exports = removeFromArray;
