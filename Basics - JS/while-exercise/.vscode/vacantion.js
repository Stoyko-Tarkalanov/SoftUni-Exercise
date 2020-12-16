function solve(input) {
    let neededMoney = Number(input[0]);
    let toStart = Number(input[1]);
    let index = 2;
    let spendCount = 0;
    let isSpend = false;
    let days = 0;

    while (toStart < neededMoney) {
        let current = input[index];
        index++;
        let money = Number(input[index]);

        if (current == "save") {
            toStart += money;
            spendCount = 0;
        } else if (current == "spend") {
            toStart -= money;
            spendCount++;

            if (toStart < 0) {
                toStart = 0;
            }

        }

        days++;

        if (spendCount == 5) {
            isSpend = true;
            break;
        }

        index++;
    }

    if (isSpend) {
        console.log(`You can't save the money.`);
        console.log(days);
    } else {
        console.log(`You saved the money for ${days} days.`);
    }
}
solve(["2000",
    "1000",
    "spend",
    "1200",
    "save",
    "2000"]);