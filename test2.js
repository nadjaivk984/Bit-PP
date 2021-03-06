
//Let’s say there are speed limitations on a motorway from 60 to 120 kilometers per hour. If
//we store the current speed value in the variable speed. Write an expression which will check if
//we are driving drive safely or not? (true if we are driving safe and false if not)


var speed = 65;
var limitation = speed > 60;
var limitation2 = speed < 120;

var safeOrnot = limitation && limitation2;

console.log(safeOrnot);
