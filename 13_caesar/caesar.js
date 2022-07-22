const caesar = function (str, cipherKey) {
    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    const strToArray = str.split("") //Converting input string to array to be able to browse alphabet and return cipher-ed values

    //first we run through the newly made array to isolate characters
    let i 
    let sTALen = strToArray.length 
    let cCipher = ""

    for (i=0; i<sTALen; i++) {
            if (alphabet.includes(strToArray[i].toLowerCase())) { // this check is here to filter out punctuation and sends it straight to output
                let index = alphabet.indexOf(strToArray[i].toLowerCase()) //I find the index value for the character we're looking for
                let cipherIndex = index+cipherKey  // then I add cipherKey input and index to get the index of the output character in alphabet

                // this section is here to account for large numbers. Since alphabet only has 26 characters, (index 0 to 25 in our array)..
                // ...the 26th index should revert to 0
                if (cipherIndex >= 26 || cipherIndex <=-26) {
                    cipherIndex %= 26
                }
                
                // since negative index doesn't work in javascript, I had to use .length for negative cipherIndex (index+cipherKey)
                if (cipherIndex>=0) {
                    if (strToArray[i] == strToArray[i].toUpperCase()) {
                    cCipher += alphabet[cipherIndex].toUpperCase()
                    }
                    else cCipher += alphabet[cipherIndex]
                }
                else {
                    if (strToArray[i] == strToArray[i].toUpperCase()) {
                        cCipher += alphabet[alphabet.length -(-cipherIndex)].toUpperCase()
                        }
                        else cCipher += alphabet[alphabet.length -(-cipherIndex)]

                }
            }
            else cCipher += strToArray[i] //this is here to return punctuation or any other non alphabet characters unchanged


    }
    console.log(cCipher)
    return cCipher
};


caesar('Hello, World!', -75)

// Do not edit below this line
module.exports = caesar;
