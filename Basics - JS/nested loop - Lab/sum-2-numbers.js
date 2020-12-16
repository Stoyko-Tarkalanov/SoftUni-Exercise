function solve(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let magicNumber = Number(input[2]);
    let counter = 0;
    let isMagic = false;

    for (let i = start; i <= end; i++) {

        for (let j = start; j <= end; j++) {

            counter++;
            if (i + j == magicNumber) {
                isMagic = true;
                console.log(`Combination N:${counter} (${i} + ${j} = ${magicNumber})`);
                break;
            }
        }
        if (isMagic) {
            break;
        }
    }
    if (!isMagic) {
        console.log(`${counter} combinations - neither equals ${magicNumber}`);
    }
}
solve(["23",
    "24",
    "20"]);