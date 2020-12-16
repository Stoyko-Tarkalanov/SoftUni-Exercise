function solve(input) {
    let kozunaci = Number(input[0]);
    let index = 1;
    let maxGrade = Number.MIN_SAFE_INTEGER;
    let topChef = "";

    for (let i = 1; i <= kozunaci; i++) {
        let chefPoints = 0;
        let totalSum = 0;

        name = input[index];
        let command = input[++index];
        while (command != "Stop") {
            chefPoints += Number(command);

            command = input[++index];
        }

        totalSum += chefPoints;

        if (command == "Stop") {
            console.log(`${name} has ${chefPoints} points.`);

            if (totalSum > maxGrade) {
                topChef = name;
                maxGrade = totalSum;
                console.log(`${name} is the new number 1!`);
            }

            if (command == "Stop") {
                index++
            }
        }

    }
    console.log(`${topChef} won competition with ${maxGrade} points!`);
}
solve([
    '3', 'Chef Manchev',
    '10', '10',
    '10', '10',
    'Stop', 'Natalie',
    '8', '2',
    '9', 'Stop',
    'George', '9',
    '2', '4',
    '2', 'Stop'
]
);