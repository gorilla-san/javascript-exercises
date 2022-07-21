const sumAll = function(x, y) {
    let sumXY = 0

    if (x<0 || y<0 || typeof x !== "number"|| typeof y !== "number") {
        sumXY = "ERROR";
    }

    else if (x<y) {
        while (x<=y) {
            sumXY += x;
            x++;
        }
    }
    else if (x>y) {
        while (y<=x) {
            sumXY  += y;
            y++
        }
    }
    else if (x==y) {
        sumXY = x = y
    }
    return sumXY



};


// Do not edit below this line
module.exports = sumAll;
