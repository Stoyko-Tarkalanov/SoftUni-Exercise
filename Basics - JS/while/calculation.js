function solve(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);
    let h = Number(input[2]);
    let totalCubicMeters = a * b * h;

    let index = 3;
    let currentNumber = input[index];
    let sum = 0;

    while (currentNumber != "Done") {
        currentNumber = Number(input[index]);
        sum += currentNumber;

        if (sum > totalCubicMeters) {
            console.log(`No more free space! You need ${sum - totalCubicMeters} Cubic meters more.`);
            break;
        }

        index++;
        currentNumber = String(input[index]);
    }

    if (totalCubicMeters >= sum) {
        console.log(`${totalCubicMeters - sum} Cubic meters left.`);
    }
}

// solve(["10",
//     "10",
//     "2",
//     "20",
//     "20",
//     "20",
//     "20",
//     "122"])
//     ;

solve(["10",
    "1",
    "2",
    "4",
    "6",
    "Done"]); 