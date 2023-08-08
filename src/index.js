console.log("The server is running");

var power=3;
var val=4;

function p(val,power)
{
    return Math.pow(val,power);
}
var result=p(val,power);
console.log(`The ${val} power ${power} is ${result}`);