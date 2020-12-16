function solve(input) {
    let totalEggs = Number(input[0]);
    let counter = 0;
    let red = 0;
    let orange = 0;
    let blue = 0;
    let green = 0;
    // let minNum = Number.MIN_SAFE_INTEGER;

    let index = 1;
    let command = input[index];
    while (true) {
        totalEggs--;

        switch (command) {
            case "red":
                red++;
                break;

            case "orange":
                orange++;
                break;

            case "blue":
                blue++;
                break;

            case "green":
                green++;
                break;
        }

        if (totalEggs <= 0) {
            break;
        }

        command = input[++index];
    }

    console.log(`Red eggs: ${red}`);
    console.log(`Orange eggs: ${orange}`);
    console.log(`Blue eggs: ${blue}`);
    console.log(`Green eggs: ${green}`);

    if (Math.max(red, orange, blue, green) == green) {
        console.log(`Max eggs: ${Math.max(red, orange, blue, green)} -> green`);
    } else if (Math.max(red, orange, blue, green) == orange) {
        console.log(`Max eggs: ${Math.max(red, orange, blue, green)} -> orange`);
    } else if (Math.max(red, orange, blue, green) == blue) {
        console.log(`Max eggs: ${Math.max(red, orange, blue, green)} -> blue`);
    } else if (Math.max(red, orange, blue, green) == red) {
        console.log(`Max eggs: ${Math.max(red, orange, blue, green)} -> red`);
    }
}

solve(["4","blue","red","blue","orange"]);

// solve([
//     '7', 'orange',
//     'blue', 'green',
//     'green', 'blue',
//     'red', 'green']);