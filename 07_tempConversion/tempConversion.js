const ftoc = function(f) {
      let result = ((f-32)*5/9)
      if (result == 0) {
        console.log(typeof result)
        return +result.toFixed(0);
      }
      else 
        console.log(typeof result)
        return +result.toFixed(1);
};

const ctof = function(c) {
      let result = ((c*9/5)+32)
      if (result == 0) {
        console.log(typeof result)
        return +result.toFixed(0);
      }
      else 
        console.log(typeof result)
        return +result.toFixed(1);
     
};

ftoc(150)
ctof(150)

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
