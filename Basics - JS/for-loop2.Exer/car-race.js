function solve(fuel, fuelAmount, labs) {
    fuel = Number(fuel);
    fuelAmount = Number(fuelAmount);
    labs = Number(labs);

    let labCounter = 0;

    for (let i = 1; i <= labs; i++) {
        fuel -= fuelAmount;

        if (i == 1) {
            fuelAmount -= 0.1;
        }

        if (fuel <= 0) {
            break;
        }

        labCounter++;
    }

    if (fuel <= 0) {
        console.log(`You are out of fuel in round ${labCounter}!`);
    } else {
        console.log("Congrats! You won the race!");
    }
}
solve("50", "4.3", "30");