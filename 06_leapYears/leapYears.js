const leapYears = function(year) {
    if (year%4==0 && year%100!==0) {
        leap = true
    }
    else if (year%4==0 && year%100 ==0) {
        if (year%400 == 0) {
            leap = true
        }
        else leap = false
    }
    else leap = false;
    
    return leap;


};


leapYears(1996)

// Do not edit below this line
module.exports = leapYears;
