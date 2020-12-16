function solve(input) {
    let n = Number(input[0]);
    let numCount1 = 0;
    let numCount2 = 0;
    let numCount3 = 0;
    let numCount4 = 0;
    let numCount5 = 0;

    for (let i = 1; i < input.length; i++) {
        let current = Number(input[i]);

        if (current < "200") {
            numCount1++;
        } else if (current < "400") {
            numCount2++;
        } else if (current < "600") {
            numCount3++;
        } else if (current < "800") {
            numCount4++;
        } else if (current >= "800") {
            numCount5++;
        }
    }
    
    let p1 = numCount1 / n * 100;
    let p2 = numCount2 / n * 100;
    let p3 = numCount3 / n * 100;
    let p4 = numCount4 / n * 100;
    let p5 = numCount5 / n * 100;

    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
    console.log(`${p4.toFixed(2)}%`);
    console.log(`${p5.toFixed(2)}%`);
}
solve(["3", "1", "2", "999"]);