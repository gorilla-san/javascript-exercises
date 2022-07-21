const findTheOldest = function(myArray) {
    console.log(myArray)
    len = myArray.length 
    let i 
    for (i=0; i<len; i++) {
        if (myArray[i].yearOfDeath === undefined) {
            myArray[i].yearOfDeath = new Date().getFullYear();      
        }
    }
    function compare( a, b ) {
        if ( (a.yearOfDeath - a.yearOfBirth) < (b.yearOfDeath - b.yearOfBirth) ){
          return -1;
        }
        if ( (a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth) ){
          return 1;
        }
        return 0;
      }
      
      sortedArray = myArray.sort( compare );
      console.log(sortedArray.at(-1))
      console.log(sortedArray[0].yearOfDeath, sortedArray[0].name)

      return sortedArray.at(-1)

}

const people = [
    {
      name: "Carly",
      yearOfBirth: 1066,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
]

findTheOldest(people)
    

// Do not edit below this line
module.exports = findTheOldest;
