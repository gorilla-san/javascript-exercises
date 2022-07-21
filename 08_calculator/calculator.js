const add = function(x, y) {
      return +x+y;
};

const subtract = function(x, y) {
      return +(x-y);
};

const sum = function(myArray = []) {
      let result = 0
      let mAL = myArray.length
      let i
      for (i=0; i<mAL; i++) {
        // console.log(i)
        // console.log(myArray[i])
        result += +myArray[i]
      }
      // console.log(myArray)
      // console.log(myArray[i])
      // console.log(result)
      // console.log(mAL)
      return +result
};

sum([7,2,5,6])

const multiply = function(myArray = []) {
      let result = 1
      let mAL = myArray.length
      let i
      for (i=0; i<mAL; i++) {
        result *= myArray[i]
        // console.log(result)
        // console.log(myArray[i])
        // console.log(i)
      }
      return +result

};

// multiply([1,2,3,4,5,6,7])

const power = function(x, y) {
      return Math.pow(x, y)
	
};

const factorial = function(x) {
      let i
      resultFac = 1
      for (i=1; i<=x; i++) {
        resultFac *= i;
        console.log(resultFac)
      }
      return +resultFac;
	
};

factorial(10)


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
