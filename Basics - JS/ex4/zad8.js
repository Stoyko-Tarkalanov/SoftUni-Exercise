function solve(dCm,sCm,hCm,percent)
{
let obem = Number(dCm) * Number(sCm) * Number(hCm);
let allObem = obem * 0.001;
let perc = percent / 100;
let finalPer = 1 - perc; 
console.log(allObem * finalPer);
}
solve("85","75","47","17");