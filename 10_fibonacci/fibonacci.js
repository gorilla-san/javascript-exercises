const fibonacci = function(n) {
    let fibN = Math.floor((Math.pow((Math.sqrt(5)+1)/2, n) - (Math.pow(-1, n))/(Math.pow((Math.sqrt(5)+1)/2, n)))/(Math.sqrt(5)))
    if (n>0) {
    console.log(+fibN)
    return +fibN
    }
    else console.log("OOPS"); return "OOPS"
};  

fibonacci(50)

// Do not edit below this line
module.exports = fibonacci;
