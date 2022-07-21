const palindromes = function (myString) {
    const myArray = myString.split("")
    const unwanted = ["!", ",", " ", "?", "."," ","'", "-", "...", "’"]
    let uLen = unwanted.length
    let i
    // loop to remove all punctuation so that I can compare letters only
    for (i=0; i<uLen; i++) {
        //do while is here because some punctuation appears multiple times
        do {
            if (myArray.includes(unwanted[i])) {
            let aEIndex = myArray.indexOf(unwanted[i])
            myArray.splice(aEIndex, 1)
            }
            else continue
        }
        while (myArray.includes(unwanted[i]))
    }   
    // reversing the array 
    const myArrayRev = [...myArray].reverse()


    //turning arrays into strings because equality with arrays (===) is completely messed up
    //and I don't realy get it.
    let str = ""
    let strRev = ""
    let j
    let len = myArray.length
    
    for (j=0; j<len; j++) {
        str += myArray[j]
        strRev += myArrayRev[j]
    }

    console.log(str)
    console.log(strRev)

    //finally, comparing the two strings to see if they're equal and returning the result of the comparison
    if (str.toLowerCase() === strRev.toLowerCase()) {
        console.log(true)
        return true
    }
    else console.log(false); return false; 


};


// Do not edit below this line
module.exports = palindromes;
