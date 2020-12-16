function solve(input) {
    let n = input[0];
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;

    for (let i = 1; i < input.length; i++) {
        let current = Number(input[i]);

        if (current % 2 == 0) {
            count1++;
        }

        if (current % 3 == 0) {
            count2++;
        }

        if (current % 4 == 0) {
            count3++;
        }
    }

    let p1 = count1 / n * 100;
    let p2 = count2 / n * 100;
    let p3 = count3 / n * 100;

    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);

}

solve(["10", "680", "2", "600", "200", "800", "799", "199", "46", "128", "65"]);