function solve(input) {
    let index = 3;
    let s = Number(input[0]);
    let d = Number(input[1]);
    let h = Number(input[2]);
    let cubM = s * d * h;
    let sum = 0;
    let current = input[index]

    while (current != "Done") {
        current = Number(input[index]);

        if (cubM < sum) {
            break;
        }

        sum += current;
        index++;
        current = String(input[index]);
    }

    let neededSpace = cubM - sum;

    if (cubM > sum) {
        console.log(`${neededSpace} Cubic meters left.`);
    } else {
        console.log(`No more free space! You need ${sum - cubM} Cubic meters more.`)
    }
}
solve(["10",
    "10",
    "2",
    "20",
    "20",
    "20",
    "20",
    "122"]);

// solve(["10",
//     "1",
//     "2",
//     "4",
//     "6",
//     "Done"]);    