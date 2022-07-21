const reverseString = function(string) {
    let stringMirrored = ""
    const stringDiced = string.split("")
    console.log(stringDiced)
    const stringDicedMirrored = stringDiced.reverse()
    console.log(stringDicedMirrored)
    len = stringDicedMirrored.length
    for (i=0;i<len;i++) {
        stringMirrored += stringDicedMirrored[i]
    }
return stringMirrored
}

// Do not edit below this line
module.exports = reverseString;