function solve(input) {
    let detergent = Number(input[0]) * 750;
    let pots = 0;
    let dishes = 0;

    let index = 1;
    let command = input[index];
    while (command != "End") {

        if (detergent < 0) {
            break;
        }

        if (index % 3 == 0) {
            pots += Number(command);
            detergent = detergent - (command * 15);
        } else {
            dishes += Number(command);
            detergent = detergent - (command * 5);
        }

        command = input[++index];
    }
    if (detergent < 0) {
        console.log(`Not enough detergent, ${Math.abs(detergent)} ml. more necessary!`);
    } else {
        console.log(`Detergent was enough!`);
        console.log(`${dishes} dishes and ${pots} pots were washed.`);
        console.log(`Leftover detergent ${detergent} ml.`);
    }
}
solve(['1',
    '10',
    '15',
    '10',
    '12',
    '13',
    '30']);

// solve(['2', '53', '65', '55', 'End']);