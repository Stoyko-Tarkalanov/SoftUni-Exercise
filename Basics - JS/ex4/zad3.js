function solve(depsum,month,yearporcent)
{
let fee = Number(depsum) * Number(yearporcent) / 100;
let mon = fee / 12;
let result = Number(depsum) + Number(month) * mon;
console.log(result);
}
solve("200", "3", "5.7");