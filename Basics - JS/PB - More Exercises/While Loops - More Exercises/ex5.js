function solve(input) {
    let n = Number(input[0]);
    let combinatin = 0;
    let counter = 0;

    let index = 1;
    let command = Number(input[index]);
    while (true) {
        counter++;
        combinatin += command

        command = Number(input[++index]);
        if (counter >= n) {
            break;
        }
    }
    let print = combinatin / n;
    console.log(print.toFixed(2));
}
solve(['3',
    '82',
    '43',
    '22'
]);