function solve(days,cookers,cakes,pancakes,pans)
{
let torti = Number(cakes) * 45;
let gofreti = Number(pancakes) * 5.80;
let palachinki = Number(pans) * 3.20;
let price = (torti + gofreti + palachinki) * 8;
let max = price * 23;
let avarege = max - 0.125*max ;
console.log(avarege.toFixed(1))
}
solve("23", "8", "14", "30", "16");