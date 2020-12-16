function solve() {
    let input = arguments;
    let playerOne = Number(input[0]);
    let playerTwo = Number(input[1]);

    let index = 2;
    let command = input[index];
    while (command !== "End of battle") {

        if (playerOne <= 0) {
            break;
        } else if (playerTwo <= 0) {
            break;
        }

        if (command === "one") {
            playerTwo--;
        } else if (command === "two") {
            playerOne--;
        }

        command = input[++index];
    }

    if (command == "End of battle") {
        console.log(`Player one has ${playerOne} eggs left.`);
        console.log(`Player two has ${playerTwo} eggs left.`);
    } else if (playerOne <= 0) {
        console.log(`Player one is out of eggs. Player two has ${playerTwo} eggs left.`);
    } else if (playerTwo <= 0) {
        console.log(`Player two is out of eggs. Player one has ${playerOne} eggs left.`);
    }
}
//solve("6", "3", "one", "two", "two", "one", "one");

// solve("2", "6", 'one',
//     'two',
//     'two');

solve('5',
    '4',
    'one',
    'two',
    'one',
    'two',
    'two',
    'End of battle');
