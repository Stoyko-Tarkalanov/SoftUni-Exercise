function solve(input) {
    let neededSum = input[0];
    let count = 0;
    let requiredSum = 0;
    let cash = 0;
    let card = 0;
    let cashCount = 0;
    let cardCount = 0;

    let index = 1;
    let command = input[index];
    while (command != 'End') {
        count++;
        if (count % 2 == 0) {

            if (command < 10) {
                console.log(`Error in transaction!`);
            } else {
                cardCount++;
                card += Number(command);
                requiredSum += Number(command);
                console.log(`Product sold!`);
            }

        } else {

            if (command > 100) {
                console.log(`Error in transaction!`);
            } else {
                cashCount++;
                cash += Number(command);
                requiredSum += Number(command);
                console.log(`Product sold!`);
            }

        }
        
        command = input[++index];
        if (requiredSum >= neededSum) {
            break;
        }
    }
    if (requiredSum < neededSum) {
        console.log(`Failed to collect required money for charity.`);
    } else {
        console.log(`Average CS: ${(cash / cashCount).toFixed(2)}`);
        console.log(`Average CC: ${(card / cardCount).toFixed(2)}`);
    }
}
solve([
    '500', '120',
    '8', '63',
    '256', '78',
    '317']);