const getTheTitles = function(myArray = []) {
        let i 
        let len = myArray.length
        const result = []
        for (i=0; i<len; i++) {
            result[i] = myArray[i].title 
        }
        console.log(result)
        return result

};
const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]
getTheTitles(books)

// Do not edit below this line
module.exports = getTheTitles;
