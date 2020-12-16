function solve(fullPrice)
{
    let a = Number(fullPrice) * 7.61;
    let b = Number(a) * 0.18;
    let c = Number (a - b);
    let output = `The final price is: ${c} lv.`;
    let secondoutput = `The discount is: ${b} lv.`;

   console.log(output);
   console.log(secondoutput);
}

solve("550");