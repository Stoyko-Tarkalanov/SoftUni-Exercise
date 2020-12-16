function solve(input){
let radians = Number(input);
let degrees = radians * 180/Math.PI;
console.log(degrees.toFixed(0)); 
}

solve("3.1416");
solve("6.2832");
solve("0.7854");
solve("0.5236");