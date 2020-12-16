function solve(input) {
    let index = 0;
    let count = input[index];
    let sumCount = 0;

    while (count != "NoMoreMoney") {

        let current = Number(input[index++]);

        if (count < 0){
            console.log(`Invalid operation!`);
            break;
        }

        console.log(`Increase: ${current.toFixed(2)}`);
        sumCount += current;
        count = input[index];
    }
    console.log(`Total: ${sumCount.toFixed(2)}`);
}
solve(["5.51",
    "69.42",
    "100",
    "NoMoreMoney"]);