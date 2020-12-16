function solve(fp)
{
let a = Number(fp) * 7.61;
let b = Number(a) * 0.18;
let c = Number(a - b);
let output1 = `Final price is: ${c}`;
let output2 = `The discount is: ${b}`;
console.log(output1);
console.log(output2);
}

solve(`150`);