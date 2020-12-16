function solve(input) {
    let first = input[0];
    let totalFood = first * 1000;
    let eatenFood = 0;

    let index = 1;
    let toGo = input[index];
    while (toGo != "Adopted") {

        eatenFood += Number(toGo);

        toGo = input[++index];
    }

    let leftFood = (totalFood - eatenFood);


    if (leftFood < 0) {
        console.log(`Food is not enough. You need ${Math.abs(leftFood)} grams more.`)
    } else {
        console.log(`Food is enough! Leftovers: ${leftFood} grams.`);
    }

}
// solve(['2',
//     '999',
//     '456',
//     '999',
//     '999',
//     '123',
//     '456',
//     'Adopted']);


solve(['4',
    '130',
    '345',
    '400',
    '180',
    '230',
    '120',
    'Adopted']);