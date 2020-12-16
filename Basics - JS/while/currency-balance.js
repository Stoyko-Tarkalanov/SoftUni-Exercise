function solve(input) {
    let counter = 0;
    let currentInfo = input[counter];
    let sumCounter = 0;

    while (currentInfo != "NoMoreMoney") {
        let currentNumber = Number(currentInfo);

        if (currentInfo < 0) {
            console.log("Invalid operation!");
            break;
        }

        console.log(`Increase: ${Number(currentNumber).toFixed(2)}`);
        sumCounter += currentNumber;
        counter++;
        currentInfo = input[counter];
    }
    console.log(`Total: ${Number(sumCounter).toFixed(2)}`);
}
solve(["5.51",
    "69.42",
    "100",
    "NoMoreMoney"]);