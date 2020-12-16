function solve(input) {
    let n = Number(input[0]);
    let allFood = Number(input[1]);

    let dayDog = 0;
    let dayCat = 0;

    let Biscuit = 0;

    let index = 2;
    for (let i = 1; i <= n; i++) {
        let dogFood = Number(input[index++]);
        let catFood = Number(input[index++]);

        dayDog += dogFood;
        dayCat += catFood;

        if (i % 3 == 0) {
            let currentday = dogFood + catFood;
            Biscuit += currentday * 0.1;
        }

    }
    let totalEaten = dayDog + dayCat;
    let totalPercentage = (totalEaten / allFood) * 100;
    let eatenByDog = dayDog;
    let dogPercentage = (eatenByDog / totalEaten) * 100;
    let eatenByCat = dayCat;
    let catPercentage = (eatenByCat / totalEaten) * 100;

    console.log(`Total eaten biscuits: ${Math.round(Biscuit)}gr.`);
    console.log(`${totalPercentage.toFixed(2)}% of the food has been eaten.`);
    console.log(`${dogPercentage.toFixed(2)}% eaten from the dog.`);
    console.log(`${catPercentage.toFixed(2)}% eaten from the cat.`);
}
solve([
    '3', '1000',
    '300', '20',
    '100', '30',
    '110', '40']);

// solve(["3"
//     , "500"
//     , "100"
//     , "30"
//     , "110"
//     , "25"
//     , "120"
//     , "35"]) 