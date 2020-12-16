function solve(fuelLeters, literConsumationFirstLab, finishLabs) {
    fuelLeters = Number(fuelLeters);
    literConsumationFirstLab = Number(literConsumationFirstLab);
    finishLabs = Number(finishLabs);
    let outOfFuel = 0;

    for (let i = 0; i <= finishLabs; i++) {
        fuelLeters -= literConsumationFirstLab;

        if (i == 1) {
            fuelLeters -= 1;
        }

        if (fuelLeters <= 0) {
            break;
        }

        outOfFuel++;
    }

    if (fuelLeters <= 0) {
        console.log(`You are out of fuel in round ${outOfFuel}`);
    } else {
        console.log("Congrats! You won the race");
    }
}
solve("50", "4.3", "30");