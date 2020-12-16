function solve(cenaqgodi,kolbanani,kolportokali,kolmalini,kolqgodi)
{
let qgodi = Number(cenaqgodi);
let banani = Number(kolbanani);
let portokali = Number(kolportokali);
let malini = Number(kolmalini);
let kqgodi = Number(kolqgodi);

let cenamalini = cenaqgodi / 2;
let cenaportokali = cenamalini * 0.60;
let cenabanani = cenamalini * 0.20;

let totalqgodi = qgodi * kqgodi;
let totalmalini = cenamalini * malini;
let totalportokali = cenaportokali * portokali;
let totalbanani = cenabanani * banani;
let total = totalqgodi + totalmalini + totalportokali + totalbanani;

console.log(total);

}   

solve("48","10","3.3","6.5","1.7");