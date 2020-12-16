function solve(input) {
    let width = input[0];
    let length = input[1];
    let oneCake = width * length;
    let index = 2;
    let toStart = input[index];
    let counter = 0;

    while (toStart != "STOP") {
        toStart = input[index];

        if (toStart == "STOP") {
            break;
        }

        if (counter > oneCake) {
            break;
        }

        toStart = Number(input[index++]);
        counter += toStart;
    }

    if (counter > oneCake) {
        let needed = counter - oneCake;
        console.log(`No more cake left! You need ${needed} pieces more.`);
    } else {
        let needed = oneCake - counter;
        console.log(`${needed} pieces are left.`);
    }
}
solve(["10",
    "10",
    "20",
    "20",
    "20",
    "20",
    "21"]);