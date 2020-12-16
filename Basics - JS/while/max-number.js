function solve(input) {
    let counter = 0;
    let firstNumber = input[counter];
    let biggest = Number.MIN_SAFE_INTEGER;

    while (firstNumber != "Stop") {
        firstNumber = Number(firstNumber);

        if (biggest < firstNumber) {
            biggest = firstNumber;
        }

        firstNumber = input[counter++];
    }
    console.log(biggest);

}
solve(["-1",
    "Stop"]);